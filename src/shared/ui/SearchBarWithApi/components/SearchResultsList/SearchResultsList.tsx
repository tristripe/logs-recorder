import { FC } from 'react';
import styles from './SearchResultsApi.module.scss';
import { SearchResult } from '../SearchResult/SearchResult';

type ISearchResultItem = {
    name: string;
};

interface ISearchResultsList {
    results: ISearchResultItem[];
    addNewCommands: (arg: string) => void;
}

export const SearchResultsList: FC<ISearchResultsList> = ({ results, addNewCommands }) => (
    <div className={styles.resultsList}>
        {results.map((result, id) => (
            <SearchResult result={result.name} key={id} addNewCommands={addNewCommands} />
        ))}
    </div>
);
