import { useState } from 'react';
import styles from './EditColumnItemDescription.module.css';
import { Item } from '@src/models';
import { database } from '@src/database';
import cn from 'classnames';
import { Textarea } from '@Atoms/Input/Textarea/Textarea';
import { TextareaWrapper } from '@Atoms/Input/Textarea/TextareaWrapper';
import Button from '@Atoms/Button/Button';

export const EditColumnItemDescription = ({ columnItem }: { columnItem: Item }) => {
    const [description, setDescription] = useState(columnItem.description);
    const [descriptionFocused, setDescriptionFocused] = useState<boolean>(false);

    const handleDescriptionSubmit = () => {
        database.items
            .where('id')
            .equals(columnItem.id as number)
            .modify({
                description,
            });
    };

    return (
        <TextareaWrapper label="Description">
            <Textarea
                name="description"
                className={cn(
                    styles.editColumnItem__description,
                    descriptionFocused && styles.editColumnItemDescription__focused,
                )}
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                onFocus={() => {
                    setDescriptionFocused(true);
                }}
                onBlur={() => {
                    setDescriptionFocused(false);
                    handleDescriptionSubmit();
                }}
                placeholder="Add a detailed description ..."
            />
        </TextareaWrapper>
    );
};
