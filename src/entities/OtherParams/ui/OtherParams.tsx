import React, { FC, useState } from 'react';
import { Row } from '@entities/OtherParams/ui/components/Row/Row';
import DatePicker from 'react-datepicker';
import { Control, Controller, FieldValues, UseFormRegister } from 'react-hook-form';
import styles from './OtherParams.module.scss';
import 'react-datepicker/dist/react-datepicker.css';

interface IOtherParams {
    register: UseFormRegister<any>;
    control: Control<any, any>;
    setValue: any;
}

export const OtherParams: FC<IOtherParams> = ({ register, control, setValue }) => {
    const handleChange = (name: string, value: any) => {
        setValue(name, value);
    };

    return (
        <div className={styles.otherParams}>
            <p>Другие параметры поиска</p>
            <div className={styles.otherParams__settings}>
                <Row handleChange={handleChange} label="ID сущностей" id="externalTrackingId" />
                <div className={styles.datePickerWrapper}>
                    <div className={styles.datePickerItem}>
                        <p className={styles.dateLabel}>От</p>
                        <Controller
                            control={control}
                            name="dateFrom"
                            render={({ field }) => (
                                <DatePicker
                                    placeholderText="Выбрать дату"
                                    onChange={(date) => field.onChange(date)}
                                    selected={field.value}
                                />
                            )}
                        />
                    </div>
                    <div className={styles.datePickerItem}>
                        <p className={styles.dateLabel}>До</p>
                        <Controller
                            control={control}
                            name="dateTo"
                            render={({ field }) => (
                                <DatePicker
                                    placeholderText="Выбрать дату"
                                    onChange={(date) => field.onChange(date)}
                                    selected={field.value}
                                />
                            )}
                        />
                    </div>
                </div>
                <Row handleChange={handleChange} label="Запрос содержит" id="requestContains" />
                <Row handleChange={handleChange} label="Ответ содержит" id="responseContains" />
            </div>
        </div>
    );
};
