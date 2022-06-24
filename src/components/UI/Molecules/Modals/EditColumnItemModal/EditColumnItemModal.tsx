import styles from './EditColumnItemModal.module.sass';
import BaseModal from '@Molecules/Modals/BaseModal';
import EditColumnItemModalMain from './EditColumnItemModalMain/EditColumnItemModalMain';
import EditColumnItemModalSide from './EditColumnItemModalSide/EditColumnItemModalSide';
import { Item } from '@src/models';
import { database } from '@src/database';
import { useLiveQuery } from 'dexie-react-hooks';

export const EditColumnItemModal = ({
    columnItem,
    open,
    onClose,
}: {
    columnItem: Item;
    open: boolean;
    onClose: () => void;
}) => {
    const liveColumnItem = useLiveQuery(() =>
        database.items
            .where('id')
            .equals(columnItem.id as number)
            .first()
    );

    return (
        <BaseModal
            className={styles.editColumnItemModal}
            open={open}
            onClose={onClose}
        >
            <div className={styles.editColumnItemModal__content}>
                <EditColumnItemModalMain
                    columnItem={liveColumnItem || columnItem}
                />

                <EditColumnItemModalSide columnItemId={columnItem.id!} />
            </div>
        </BaseModal>
    );
};

export default EditColumnItemModal;
