import { FunctionComponent, useRef } from 'react';
import styles from './ColumnItem.module.sass';
import Heading from '@Atoms/Heading/Heading';
import { Item } from '@src/models';
import { useLiveQuery } from 'dexie-react-hooks';
import { database } from '@src/database';
import { useAppSelector } from '@hooks/redux';
import { useDrag, useDrop } from 'react-dnd';

type Props = {
    columnItem: Item;
    handleColumnItemSelect: (item: any) => void;
    columnId: number | undefined;
    // move: (id: number, afterId: number) => void
};

const ColumnItem: FunctionComponent<Props> = ({
    columnItem,
    columnId,
    handleColumnItemSelect,
    // move,
}) => {
    const ref = useRef(null);
    const colorScheme = useAppSelector(
        (state) => state.persistedReducer.config.colorScheme
    );

    const item = useLiveQuery(() => {
        return database.items.where('id').equals(columnItem.id!).first();
    });

    const tags = useLiveQuery(() => {
        return database.tags.toArray();
    });

    const [{ isDragging }, drag] = useDrag(() => ({
        type: String(columnId),
        item: { columnItem },
        collect: (monitor) => ({
            isDragging: monitor.isDragging(),
        }),
        end: (item, monitor) => {
            const dropResults = monitor.getDropResult();
            console.log('item', item);
            console.log('monitor', monitor);
            console.log('dropResults', dropResults);
        },
    }));

    return (
        <div
            ref={drag}
            style={{ opacity: isDragging ? 0.5 : 1 }}
            className={styles.columnItem}
            onClick={() => handleColumnItemSelect(columnItem)}
            data-color-scheme={colorScheme}
            // onMouseEnter={() => setHover(true)}
            // onMouseLeave={() => setHover(false)}
        >
            <div className={styles.columnItem__content}>
                {item?.tags && item?.tags.length > 0 && (
                    <div className={styles.columnItem__tags}>
                        {item?.tags?.map((tag) => {
                            const tagRef = tags?.find((t) => t.id === tag);

                            return (
                                <div
                                    key={tag}
                                    className={styles.columnItem__tag}
                                    style={{
                                        background: tagRef?.color,
                                    }}
                                ></div>
                            );
                        })}
                    </div>
                )}
                <Heading className={styles.columnItem__heading}>
                    {columnItem.title}
                </Heading>
                {/* <Content>{listItem.description}</Content> */}
            </div>
        </div>
    );
};

export default ColumnItem;
