import React, { FC, useState } from 'react';
import { Control, Controller, FieldValues, useForm, UseFormRegister } from 'react-hook-form';
import Select from 'react-select';
import styles from './SelectApp.module.scss';

interface ISelectApp {
    register: UseFormRegister<any>;
    control: Control<any, any>;
}

export const SelectApp: FC<ISelectApp> = ({ register, control }) => {
    const [options, setOptions] = useState([
        {
            value: 'wms-kld',
            label: 'wms-kld',
        },
        {
            value: 'wms-ktl',
            label: 'wms-ktl',
        },
        {
            value: 'wms-vnk',
            label: 'wms-vnk',
        },
        {
            value: 'KAK2C_ALL_APPS',
            label: 'Кактус - все инстансы',
        },
        {
            value: 'PODRYGKA_ADAPTER_ALL_APPS',
            label: 'Подружка адаптер - все инстансы',
        },
        {
            value: 'WMS_ALL_APPS',
            label: 'WMS - все инстансы',
        },
    ]);

    return (
        <div className={styles.selectApp}>
            <p className={styles.selectAppLabel}>Приложение - источник обмена</p>
            <div>
                <p className={styles.innerSelectLabel}>Выберите приложение</p>
                <Controller
                    control={control}
                    name="appName"
                    render={({ field }) => (
                        <Select
                            classNamePrefix="react-select"
                            className={styles.select}
                            options={options}
                            placeholder="Выберите"
                            onChange={(value) => field.onChange(value)}
                            value={field.value}
                        />
                    )}
                />
            </div>
        </div>
    );
};
