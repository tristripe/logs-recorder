import React, { FC, useState } from 'react';
import styles from './SearchBarWithApi.module.scss';
import { SearchBar } from './components/SearchBar/SearchBar';
import { SearchResultsList } from './components/SearchResultsList/SearchResultsList';

interface ISearchBarWithApi {
    addNewCommands: (arg: string) => void;
}

export const SearchBarWithApi: FC<ISearchBarWithApi> = ({ addNewCommands }) => {
    const [results, setResults] = useState([]);

    return (
        <div className={styles.searchBarWrapper}>
            <p className={styles.label}>Выберите команду</p>
            <SearchBar setResults={setResults} />
            {results && results.length > 0 && <SearchResultsList addNewCommands={addNewCommands} results={results} />}
        </div>
    );
};
