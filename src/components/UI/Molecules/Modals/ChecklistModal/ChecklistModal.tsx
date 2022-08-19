import { useState } from 'react';
import styles from './ChecklistModal.module.css';
import { database } from '@src/database';
import BaseModal from '@Molecules/Modals/BaseModal';
import Input from '@Atoms/Input/Input';
import Button from '@src/components/UI/Atoms/Button/Button';

export const ChecklistModal = ({
    columnItemId,
    open,
    handleClose,
}: {
    columnItemId: number;
    open: boolean;
    handleClose: () => void;
}) => {
    const [title, setTitle] = useState('');

    const createChecklist = async (e: React.FormEvent) => {
        e.preventDefault();

        try {
            database.checklists.add({
                title,
                description: '',
                itemId: columnItemId,
            });
        } catch (e) {
            console.log(e);
        }

        setTitle('');
        handleClose();
    };

    return (
        <BaseModal
            title="Create a new checklist"
            open={open}
            onClose={handleClose}
        >
            <form onSubmit={createChecklist} className={styles.checklistModal__form}>
                <Input
                    type="text"
                    label="Title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />

                <Button type="submit" variant="secondary">
                    Create
                </Button>
            </form>
        </BaseModal>
    );
};

export default ChecklistModal;
