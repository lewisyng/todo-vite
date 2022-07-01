import { FunctionComponent } from 'react';
import styles from './Column.module.css';
import ColumnItem from '@Molecules/ColumnItem/ColumnItem';
import { ColumnType } from '@src/models';
import CreateItem from '@Molecules/CreateItem/CreateItem';
import { database } from '@src/database';
import { useLiveQuery } from 'dexie-react-hooks';
import ColumnHeader from '@Molecules/ColumnHeader/ColumnHeader';
import { useAppSelector } from '@hooks/redux';
import { DndProvider, useDrop } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

type Props = {
    boardId: number;
    column: ColumnType;
    handleColumnItemSelect: (item: any) => void;
};

const Column: FunctionComponent<Props> = ({
    boardId,
    column,
    handleColumnItemSelect,
}) => {
    const { id: columnId } = column;

    const colorScheme = useAppSelector(
        (state) => state.persistedReducer.config.colorScheme
    );

    const items = useLiveQuery(
        () => database.items.where('columnId').equals(columnId!).toArray(),
        [columnId],
        []
    );

    const [{ canDrop, getItem, isOver }, drop] = useDrop(() => ({
        accept: String(columnId),
        collect: (monitor) => ({
            isOver: monitor.isOver(),
            canDrop: monitor.canDrop(),
            getItem: monitor.getItem(),
        }),
    }));

    console.log('options', { canDrop, isOver, getItem });

    // const buildItemData = () => {
    //     const itemsById = {};
    //     const itemsByIndex = [];
    //     for (let i = 0; i < 1000; i += 1) {
    //         const item = { id: i, text: Faker.name.findName() };
    //         itemsById[item.id] = item;
    //         itemsByIndex[i] = item;
    //     }
    //     return {
    //         itemsById,
    //         itemsByIndex,
    //     };
    // };

    //     const moveItem = (id, afterId) => {
    //         const { cardsById, cardsByIndex } = items;
    //         const card = cardsById[id];
    //         const afterCard = cardsById[afterId];
    //         const cardIndex = cardsByIndex.indexOf(card);
    //         const afterIndex = cardsByIndex.indexOf(afterCard);
    //         this.cardState = update(this.cardState, {
    //             cardsByIndex: {
    //                 $splice: [
    //                     [cardIndex, 1],
    //                     [afterIndex, 0, card],
    //                 ],
    //             },
    //         });
    //         this.scheduleUpdate();
    //     };
    //    const scheduleUpdate() {
    //         if (!this.requestedFrame) {
    //           this.requestedFrame = requestAnimationFrame(this.drawFrame)
    //         }
    //       }
    //       const drawFrame = () => {
    //         this.setState(STATE)
    //         this.requestedFrame = undefined
    //       }

    return (
        <div
            className={styles.column}
            style={{ backgroundColor: `var(--${colorScheme}-200)` }}
        >
            <ColumnHeader column={column} />

            <div ref={drop}>
                {items?.map((columnItem: any) => (
                    <ColumnItem
                        key={columnItem.id}
                        columnItem={columnItem}
                        columnId={columnId}
                        handleColumnItemSelect={handleColumnItemSelect}
                        // move={moveItem}
                    />
                ))}
            </div>

            <CreateItem boardId={boardId} columnId={columnId!} />
        </div>
    );
};

export default Column;
