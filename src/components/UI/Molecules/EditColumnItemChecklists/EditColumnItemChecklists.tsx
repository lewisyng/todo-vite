import styles from './EditColumnItemChecklists.module.css';
import { useLiveQuery } from 'dexie-react-hooks';
import { database } from '@src/database';
import { Item } from '@src/models';
import Checklist from '@Atoms/Checklist/Checklist';
import { Label } from '@Atoms/Label/Label';

export const EditColumnItemChecklists = ({
    columnItem,
}: {
    columnItem: Item;
}) => {
    const checklists = useLiveQuery(
        () =>
            database.checklists
                .where('itemId')
                .equals(columnItem.id!)
                .toArray(),
        [],
        []
    );

    return (
        <>
            <Label
                className={styles.editColumnItemChecklist__label}
                title="Checklists"
                bold
            />

            <div className={styles.columnItemChecklists}>
                {checklists.map((checklist, idx) => (
                    <Checklist key={idx} checklist={checklist} />
                ))}
            </div>
        </>
    );
};

export default EditColumnItemChecklists;
