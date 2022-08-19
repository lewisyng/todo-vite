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
            parentSelector={document.body}
            title="Edit Column Item"
        >
            <div className={styles.editColumnItemModal__content}>
                <div className={styles["editColumnItemModal__content-main"]}>
                    <EditColumnItemModalMain
                        columnItem={liveColumnItem || columnItem}
                    />
                </div>
                <div className={styles["editColumnItemModal__content-side"]}>
                    <EditColumnItemModalSide columnItemId={columnItem.id!} />
                </div>
            </div>
        </BaseModal>
    );
};

export default EditColumnItemModal;
