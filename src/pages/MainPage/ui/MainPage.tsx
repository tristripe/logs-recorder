import React, { useState } from 'react';
import { SelectCommand } from '@entities/SelectCommand';
import { SelectApp } from '@entities/SelectApp';
import { OtherParams } from '@entities/OtherParams';
import { SubmitHandler, useForm } from 'react-hook-form';
import { ResultTable } from '@entities/ResultTable';
import { MOCK_DATA } from '@entities/ResultTable/ui/MOCK';
import styles from './MainPage.module.scss';

const MainPage = () => {
    const { control, register, handleSubmit, setValue } = useForm({
        defaultValues: {
            appName: '',
            appUserName: 'sreztsov@samokat.ru',
            name: [],
            externalTrackingId: [],
            dateFrom: '',
            dateTo: '',
            requestContains: [],
            responseContains: [],
        },
    });
    const onSubmit: SubmitHandler<any> = (data) => console.log(data);

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className={styles.main}>
                <header className={styles.header}>
                    <h1 className={styles.main__title}>Поиск логов обмена</h1>
                    <p className={styles.selectApp__accountName}>
                        Аккаунт - <strong>Тестовое имя</strong>
                    </p>
                </header>

                <SelectApp register={register} control={control} />
                <SelectCommand register={register} control={control} setValue={setValue} />
                <OtherParams register={register} control={control} setValue={setValue} />

                <input type="submit" value="Поиск" className={styles.btn} />
                <ResultTable table={MOCK_DATA} />
            </div>
        </form>
    );
};

export default MainPage;
