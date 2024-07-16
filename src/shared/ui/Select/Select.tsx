import Select from 'react-select';
import React from 'react';
import styles from './Select.module.scss';

interface SelectWrapperProps {
    id: string;
    label: string;
    handleChange: (arg: any) => any;
    className?: string;
    options: { value: string; label: string }[];
    placeholder?: string;
    noOptionsMessage?: () => string;
}

export const SelectWrapper: React.FC<SelectWrapperProps> = ({ id, label, handleChange, ...props }) => (
    <div className={styles.select_wrapper}>
        {label && <label htmlFor={id}>{label}</label>}
        <Select classNamePrefix="react-select" className={styles.select} {...props} />
    </div>
);
