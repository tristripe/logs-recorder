import React, { FC } from 'react';
import styles from './InputWrapper.module.scss';

interface InputWrapperProps {
    id?: string;
    type: string;
    handleChange: (arg: any) => any;
    label: string;
    className?: string;
    value: string;
}

const InputWrapper: React.FC<InputWrapperProps> = ({
    id,
    type = 'text',
    handleChange,
    label,
    ...props
}) => (
    <div className={styles.input}>
        {label && <label htmlFor={id}>{label}</label>}
        <input type={type} onChange={handleChange} {...props} />
    </div>
);

export default InputWrapper;
