import { BoardTile } from '@src/components/UI/Atoms/BoardTile/BoardTile';
import { Board } from '@src/models';
import { FunctionComponent } from 'react';
import styles from "./BoardList.module.scss"

type BoardListProps = {
    boards: Board[];
};

export const BoardList: FunctionComponent<BoardListProps> = ({ boards }) => {
    return (
        <div className={styles["board-list"]}>
            {boards &&
                boards.map((board: Board, idx: number) => (
                    <BoardTile key={idx} board={board} />
                ))}
        </div>
    );
};
