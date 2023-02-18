import { BoardTile } from '@src/components/UI/Atoms/BoardTile/BoardTile';
import { Board } from '@src/models';
import cn from 'classnames';
import { FunctionComponent } from 'react';
import styles from './BoardList.module.scss';

type BoardListProps = {
    boards: Board[];
};

export const BoardList: FunctionComponent<BoardListProps> = ({ boards }) => {
    return (
        <div className={cn(styles['board-list'], boards.length < 3 && styles['board-list--flex'])}>
            {boards && boards.map((board: Board, idx: number) => <BoardTile key={idx} board={board} />)}
        </div>
    );
};
