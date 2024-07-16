import { FC } from 'react';
import styles from './SearchResult.module.scss';

interface ISearchResult {
    result: string;
    addNewCommands: (arg: string) => void;
}

export const SearchResult: FC<ISearchResult> = ({ result, addNewCommands }) => (
    <button type="button" className={styles.btn} onClick={() => addNewCommands(result)}>
        {result}
    </button>
);
