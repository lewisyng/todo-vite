import { useState } from 'react';
import styles from './Checklist.module.css';
import { CheckListType } from '@src/models';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import ChecklistItem from '../ChecklistItem/ChecklistItem';
import AddIcon from '@mui/icons-material/Add';
import { database } from '@src/database';
import DeleteIcon from '@mui/icons-material/Delete';
import { Label } from '@Atoms/Label/Label';
import { useLiveQuery } from 'dexie-react-hooks';
import Input from '@Atoms/Input/Input';
import Button from '@Atoms/Button/Button';

export const Checklist = ({ checklist }: { checklist: CheckListType }) => {
    const [showNewChecklistItemInput, setShowNewChecklistItemInput] =
        useState(false);
    const [newListItem, setNewListItem] = useState('');

    const checklistItems = useLiveQuery(
        () =>
            database.checklistItems
                .where('checklistId')
                .equals(checklist.id!)
                .toArray(),
        [],
        []
    );

    const createNewListItem = (
        e: React.FormEvent,
        checklist: CheckListType
    ) => {
        e.preventDefault();

        if (newListItem !== '') {
            database.checklistItems.add({
                title: newListItem,
                description: '',
                done: false,
                checklistId: checklist.id!,
            });
        }

        setNewListItem('');
        setShowNewChecklistItemInput(false);
    };

    const deleteChecklist = () => {
        database.checklistItems
            .where('checklistId')
            .equals(checklist.id!)
            .delete();
        database.checklists.delete(checklist.id!);
    };

    return (
        <div className={styles.checklist}>
            <div className={styles.checklist__header}>
                <Label
                    title={checklist.title}
                    className={styles.checklistHeader__title}
                    bold
                />

                <DeleteIcon onClick={deleteChecklist} />
            </div>

            <div className={styles.checklist__items}>
                {checklistItems.map((item, idx) => (
                    <ChecklistItem key={idx} item={item} />
                ))}
            </div>

            {showNewChecklistItemInput && (
                <form onSubmit={(e) => createNewListItem(e, checklist)}>
                    <Input
                        type="text"
                        value={newListItem}
                        onChange={(e) => setNewListItem(e.target.value)}
                    />
                </form>
            )}

            <div className={styles.checklist__newItem}>
                <Button
                    onClick={() => setShowNewChecklistItemInput(true)}
                    // variant="outlined"
                >
                    Add
                </Button>
            </div>
        </div>
    );
};

export default Checklist;
