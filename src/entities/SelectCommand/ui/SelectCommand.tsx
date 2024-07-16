import React, { FC, useState } from 'react';
import { SearchBarWithApi } from '@shared/ui/SearchBarWithApi/SearchBarWithApi';
import { Control, useForm, useFormContext, UseFormRegister } from 'react-hook-form';
import styles from './SelectCommand.module.scss';

interface ISelectCommand {
    register: UseFormRegister<any>;
    control: Control<any, any>;
    setValue: any;
}

export const SelectCommand: FC<ISelectCommand> = ({ register, control, setValue }) => {
    const [confirmedCommands, setConfirmedCommands] = useState<string[]>([]);

    const addNewCommands = (arg: string) => {
        setConfirmedCommands([...confirmedCommands, arg]);
        setValue('name', [...confirmedCommands, arg]);
    };

    return (
        <div className={styles.selectCommand}>
            <p className={styles.title}>Команда в приложении</p>
            <div className={styles.wrapper}>
                <SearchBarWithApi addNewCommands={addNewCommands} />
            </div>
            <div className={styles.wrapper}>
                <p className={styles.title}>Выбранные команды:</p>
                <p {...register('name')} className={styles.commandsList}>
                    {confirmedCommands.map((item, index) => (
                        <strong key={index}>{item}</strong>
                    ))}
                </p>
            </div>
        </div>
    );
};
