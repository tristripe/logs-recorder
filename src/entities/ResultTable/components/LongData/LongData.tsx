import React, { FC, MutableRefObject, useRef, useState } from 'react';
import styles from './LongData.module.scss';

interface ILongData {
    title: string;
    copyCode: (arg: MutableRefObject<undefined>) => void;
    data: string;
}

export const LongData: FC<ILongData> = ({ title, copyCode, data }) => {
    const requestRef = useRef();
    const [isHidden, setIsHidden] = useState(false);

    return (
        <div className={styles.longDataWrapper}>
            <div className={styles.content}>
                <strong>{title}:</strong>
                <span ref={requestRef} className={isHidden ? '' : styles.longData}>
                    {data}
                </span>
            </div>
            <div className={styles.buttonWrapper}>
                <button className={styles.btn} type="button" onClick={(prev) => setIsHidden(!isHidden)}>
                    {isHidden ? 'Свернуть' : 'Раскрыть'}
                </button>
                <button className={styles.btn} type="button" onClick={() => copyCode(requestRef)}>
                    Копировать
                </button>
            </div>
        </div>
    );
};
