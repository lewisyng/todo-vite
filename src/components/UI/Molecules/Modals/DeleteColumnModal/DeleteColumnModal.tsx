import styles from './DeleteColumnModal.module.scss';
import Button from '@src/components/UI/Atoms/Button/Button';
import BaseModal from '../BaseModal';

export const DeleteColumnModal = ({
    open,
    handleClose,
    deleteColumn,
}: {
    open: boolean;
    handleClose: () => void;
    deleteColumn: () => void;
}) => {
    return (
        <BaseModal
            open={open}
            onClose={handleClose}
            title="Delete Column"
            subtitle="Are you sure you want to delete this column? This action cannot be undone."
        >
            <div className={styles['delete-column-modal__actions']}>
                <Button variant="secondary" onClick={deleteColumn}>
                    Column löschen
                </Button>
                <Button variant="warning" onClick={handleClose}>
                    Abbrechen
                </Button>
            </div>
        </BaseModal>
    );
};

export default DeleteColumnModal;
