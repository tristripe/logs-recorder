import { Dispatch, FC, SetStateAction, useState } from 'react';
import styles from './SearchBar.module.scss';

interface ISearchBar {
    setResults: Dispatch<SetStateAction<string[]>>;
}

export const SearchBar: FC<ISearchBar> = ({ setResults }) => {
    const [input, setInput] = useState('');

    const fetchData = (value: string) => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then((response) => response.json())
            .then((json) => {
                const results = json.filter(
                    (user: any) => value && user && user.name && user.name.toLowerCase().includes(value),
                );
                setResults(results);
            });
    };

    const handleChange = (value: string) => {
        setInput(value);
        fetchData(value);
    };

    return (
        <div className={styles.inputWrapper}>
            <input
                placeholder="Введите первые 2 символа"
                value={input}
                onChange={(e) => handleChange(e.target.value)}
            />
        </div>
    );
};
