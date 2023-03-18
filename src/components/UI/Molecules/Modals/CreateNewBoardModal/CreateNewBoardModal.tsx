import { useState, FormEvent } from 'react';
import styles from './CreateNewBoardModal.module.sass';
import { database } from '@src/database';
import Input from '@Atoms/Input/Input';
import BaseModal from '../BaseModal';
import Button from '@src/components/UI/Atoms/Button/Button';
import toast, { Toaster, useToaster } from 'react-hot-toast';

export const CreateNewBoardModal = ({
    open,
    handleClose,
}: {
    open: boolean;
    handleClose: () => void;
    className?: string;
}) => {
    const [name, setName] = useState<string>('');

    const createBoard = (e: FormEvent) => {
        e.preventDefault();

        // @ts-ignore
        database.boards.add({
            title: name,
        });

        setName('');
        handleClose();

        notify('Board created');
    };

    const { toasts, handlers } = useToaster();
    const { startPause, endPause, calculateOffset, updateHeight } = handlers;

    const notify = (message: string) => {
        toast(message);
    };

    return (
        <BaseModal
            open={open}
            onClose={handleClose}
            title="Create Column"
            subtitle="Type in a name for your new board."
        >
            <>
                <form className={styles.newBoard__form} onSubmit={createBoard}>
                    <Input type="text" value={name} onChange={(e) => setName(e.currentTarget.value)} autoFocus />

                    <div className={styles['create-board-modal__actions']}>
                        <Button type="submit" variant="secondary">
                            Baord erstellen
                        </Button>

                        <Button variant="warning" onClick={handleClose}>
                            Abbrechen
                        </Button>
                    </div>
                </form>

                {toasts.map((toast, idx) => {
                    // const offset = calculateOffset(idx);

                    return (
                        <div
                            key={toast.id}
                            className={styles['toast-container']}
                            style={{
                                position: 'absolute',
                                top: 0,
                                left: 0,
                            }}
                        >
                            <div className={styles['toast-content']}>{/* {toast.message} */}</div>
                        </div>
                    );
                })}
            </>
        </BaseModal>
    );
};

export default CreateNewBoardModal;
