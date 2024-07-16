import React, { ChangeEvent, FC, useState } from 'react';
import styles from './TagsInput.module.scss';

interface ITagsInput {
    values: string[];
    onChange: (name: string, args: any) => void;
    color?: string;
    name: string;
}

const TagsInput: FC<ITagsInput> = ({ values, onChange, color, name }) => {
    const [tag, setTag] = useState('');
    const [tags, setTags] = useState(values);

    const handleChange = (e: any) => {
        const { value } = e.target;
        setTag(value);
    };

    const handleKeyDown = (e: any) => {
        const { key } = e;
        const newTag = tag.trim();

        if ((key === ',' || key === 'Enter' || key === ' ') && newTag.length && !tags.includes(newTag)) {
            e.preventDefault();
            setTags((prevTags) => {
                const latestTags = [...prevTags, newTag];
                onChange(name, latestTags);
                return latestTags;
            });
            setTag('');
        } else if (key === 'Backspace' && !newTag.length && tags.length) {
            e.preventDefault();

            const tagsCopy = [...tags];
            const lastTag = tagsCopy.pop();

            setTags(tagsCopy);
            onChange(name, tagsCopy);
            setTag(lastTag);
        }
    };

    const removeTag = (index: number) => {
        setTags((prevTags) => {
            const latestTags = prevTags.filter((tag, i) => i !== index);
            onChange(name, latestTags);
            return latestTags;
        });
    };

    return (
        <div className={styles.tagsInputWrapper}>
            {tags.map((tag, index) => (
                /*                <div key={index} className={`tag-item ${getColor()}`}> */
                // eslint-disable-next-line react/no-array-index-key
                <div key={index} className={styles.tagItem}>
                    <span className={styles.title}>{tag}</span>
                    <button className={styles.removeBtn} type="button" onClick={() => removeTag(index)}>
                        &times;
                    </button>
                </div>
            ))}
            <input value={tag} onChange={handleChange} className={styles.tagInput} onKeyDown={handleKeyDown} />
        </div>
    );
};

export default TagsInput;
