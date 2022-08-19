import styles from './CreateTagModal.module.css';
import cn from 'classnames';
import { FormEvent, useRef, useState } from 'react';
import { Label } from '@Atoms/Label/Label';
import { database } from '@src/database';
import BaseModal from '@Molecules/Modals/BaseModal';
import Button from '@Atoms/Button/Button';
import Input from '@src/components/UI/Atoms/Input/Input';

export const CreateTagModal = ({
    open,
    handleClose,
}: {
    open: boolean;
    handleClose: () => void;
}) => {
    const [title, setTitle] = useState('');
    const [color, setColor] = useState('#000');
    const titleInputRef = useRef<HTMLInputElement | null>(null);

    const addTag = (e: FormEvent) => {
        e.preventDefault();

        database.tags.add({
            title,
            color,
        });

        setTitle('');
        setColor('#000');
    };

    return (
        <BaseModal open={open} onClose={handleClose} title="Create a tag">
            <form className={styles.createTagModal__form} onSubmit={addTag}>
                <Input
                    ref={titleInputRef}
                    label="Title"
                    type="text"
                    id="title"
                    name="title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />

                <Input
                    label="Color"
                    type="color"
                    id="color"
                    name="color"
                    value={color}
                    onChange={(e) => setColor(e.target.value)}
                />

                <Button type="submit" /*variant="outlined"*/>Create Tag</Button>
            </form>
        </BaseModal>
    );
};

export default CreateTagModal;
