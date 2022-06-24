import { useState } from 'react';
import { database } from '@src/database';
import BaseModal from '@Molecules/Modals/BaseModal';
import Input from '@Atoms/Input/Input';

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
            title="Name your new checklist"
            open={open}
            onClose={handleClose}
        >
            <form onSubmit={createChecklist}>
                <Input
                    type="text"
                    label="Title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
            </form>
        </BaseModal>
    );
};

export default ChecklistModal;
