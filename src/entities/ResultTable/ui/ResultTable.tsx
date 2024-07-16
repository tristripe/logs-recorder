import React, { FC } from 'react';
import Row from '@entities/ResultTable/components/Row/Row';
import styles from './ResultTable.module.scss';

interface IResultTable {
    table: any;
}

export const ResultTable: FC<IResultTable> = ({ table }) => (
    <div>
        <h4>Результаты поиска:</h4>
        <div className={styles.resultTable}>
            {table.exchanges.map((item: any) => (
                <Row item={item} />
            ))}
        </div>
    </div>
);
