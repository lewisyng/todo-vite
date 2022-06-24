import { useState } from 'react';
import styles from './CreateNewBoardModal.module.sass';
import { database } from '@src/database';
import Input from '@Atoms/Input/Input';
import BaseModal from '../BaseModal';
import Button from '@src/components/UI/Atoms/Button/Button';

export const CreateNewBoardModal = ({
    open,
    handleClose,
}: {
    open: boolean;
    handleClose: () => void;
    className?: string;
}) => {
    const [name, setName] = useState<string>('');

    const createBoard = () => {
        database.boards.add({
            title: name,
        });

        setName('');
        handleClose();
    };

    return (
        <BaseModal
            open={open}
            onClose={handleClose}
            title="Create Column"
            subtitle="Type in a name for your new board."
        >
            <form className={styles.newBoard__form}>
                <Input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.currentTarget.value)}
                    autoFocus
                />
            </form>

            <div className={styles['create-board-modal__actions']}>
                <Button variant="secondary" onClick={createBoard}>
                    Baord erstellen
                </Button>
                <Button variant="warning" onClick={handleClose}>
                    Abbrechen
                </Button>
            </div>
        </BaseModal>
    );
};

export default CreateNewBoardModal;
