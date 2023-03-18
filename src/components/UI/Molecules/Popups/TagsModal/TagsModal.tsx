import styles from './TagsModal.module.sass';
import { useLiveQuery } from 'dexie-react-hooks';
import { database } from '@src/database';
import { TagType } from '@src/models';
import BaseModal from '@Molecules/Modals/BaseModal';
import Button from '@src/components/UI/Atoms/Button/Button';
import cs from 'classnames';
import { Tag } from '@Atoms/Tag/Tag';

export const TagsModal = ({
    columnItemId,
    open,
    handleClose,
}: {
    columnItemId: number;
    open: boolean;
    handleClose: () => void;
}) => {
    const tags: TagType[] | undefined = useLiveQuery(() => database.tags.toArray());

    const columnItem = useLiveQuery(() => database.items.where('id').equals(columnItemId).first());

    console.log('col', columnItem?.tags);

    const toggleTag = (tagId: number) => {
        if (columnItem!.tags?.includes(tagId)) {
            database.items
                .where('id')
                .equals(columnItem!.id as number)
                .modify({
                    tags: columnItem!.tags!.filter((tag) => tag !== tagId),
                });
        } else {
            database.items
                .where('id')
                .equals(columnItem!.id as number)
                .modify({
                    tags: [...columnItem!.tags!, tagId],
                });
        }
    };

    const deselectAll = () => {
        database.items
            .where('id')
            .equals(columnItem!.id as number)
            .modify({
                tags: [],
            });
    };

    return (
        <BaseModal title="Tags" open={open} onClose={handleClose}>
            <div className={styles.tags}>
                {tags?.map((tag) => (
                    <Tag
                        onClick={() => toggleTag(tag.id!)}
                        active={columnItem?.tags.includes(tag!.id as number)}
                        color={tag.color}
                        title={tag.title}
                    />
                ))}

                <Button className={styles.tagsModal__btn} onClick={deselectAll} variant="primary">
                    Save
                </Button>

                <Button className={styles.tagsModal__btn} onClick={deselectAll} variant="secondary">
                    Deselect all
                </Button>
            </div>
        </BaseModal>
    );
};

export default TagsModal;
