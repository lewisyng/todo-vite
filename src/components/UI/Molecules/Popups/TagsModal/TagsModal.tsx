import styles from './TagsModal.module.sass';
import { useLiveQuery } from 'dexie-react-hooks';
import { database } from '@src/database';
import { TagType } from '@src/models';
import BaseModal from '@Molecules/Modals/BaseModal';
import Button from '@src/components/UI/Atoms/Button/Button';
import cs from 'classnames';

export const TagsModal = ({
    columnItemId,
    open,
    handleClose,
}: {
    columnItemId: number;
    open: boolean;
    handleClose: () => void;
}) => {
    const tags: TagType[] | undefined = useLiveQuery(() =>
        database.tags.toArray()
    );

    const columnItem = useLiveQuery(() =>
        database.items.where('id').equals(columnItemId).first()
    );

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
                {tags?.map((tag) => {
                    return (
                        <div
                            key={tag.id}
                            className={cs(
                                styles.tag,
                                columnItem?.tags.includes(tag!.id as number) &&
                                    styles['tag--active']
                            )}
                            onClick={() => toggleTag(tag.id!)}
                        >
                            <div
                                className={styles.tag__color}
                                style={{ background: tag.color }}
                            ></div>

                            <div className={styles.tag__title}>{tag.title}</div>
                        </div>
                    );
                })}

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
