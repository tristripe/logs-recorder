import React, { FC } from 'react';
import TagsInput from '@shared/ui/TagsInput/TagsInput';
import styles from './Row.module.scss';

interface IRow {
    handleChange: (name: string, args: any) => void;
    label?: string;
    value?: string;
    id: string;
}

export const Row: FC<IRow> = ({ handleChange, label, value, id }) => (
    <div className={styles.otherParams__row}>
        <p className={styles.label}>{label}</p>
        <TagsInput values={[]} onChange={handleChange} name={id} />
    </div>
);
