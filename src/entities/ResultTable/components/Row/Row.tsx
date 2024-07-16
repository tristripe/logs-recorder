import React, { FC, useRef, useState } from 'react';
import { LongData } from '@entities/ResultTable/components/LongData/LongData';
import styles from './Row.module.scss';

interface IRow {
    item: any;
}

const Row: FC<IRow> = ({ item }) => {
    const [isHidden, setIsHidden] = useState(false);
    const requestRef = useRef();
    const responseRef = useRef();

    const copyCode = (ref: React.MutableRefObject<undefined>) => {
        if (!ref.current) return;

        navigator.clipboard
            // @ts-ignore
            .writeText(ref.current.innerHTML)
            .catch((err) => {
                console.log(err.message);
            });
    };

    return (
        <div className={styles.row} key={item.id}>
            <button className={styles.dropdownButton} type="button" onClick={() => setIsHidden((prev) => !prev)}>
                {item.id}
            </button>

            {isHidden && (
                <div className={styles.hiddenContent}>
                    <p>
                        <strong>appName:</strong> {item.appName}
                    </p>
                    <p>
                        <strong>appUserName:</strong> {item.appUserName}
                    </p>
                    <p>
                        <strong>name:</strong> {item.name}
                    </p>
                    <p>
                        <strong>externalDate:</strong> {item.externalDate}
                    </p>
                    <p>
                        <strong>externalId:</strong> {item.externalId}
                    </p>
                    <p>
                        <strong>externalTrackingId:</strong> {item.externalTrackingId}
                    </p>
                    <LongData title="request" copyCode={copyCode} data={item.request} />
                    <LongData title="response" copyCode={copyCode} data={item.response} />
                    <p>
                        <strong>duration:</strong> {item.duration}
                    </p>
                </div>
            )}
        </div>
    );
};

export default Row;
