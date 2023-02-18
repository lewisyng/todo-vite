import Typography from '@src/components/UI/Atoms/Typography/Typography';
import { Board } from '@src/models';
import { FunctionComponent } from 'react';
import styles from './BoardTile.module.scss';
import { Link } from 'react-router-dom';

type BoardTileProps = {
    board: Board;
};

export const BoardTile: FunctionComponent<BoardTileProps> = ({ board }) => {
    return (
        <Link to={`boards/${board.id}`} className={styles['board-tile']}>
            <Typography size="text-sm" uppercase weight="bold">
                {board.title}
            </Typography>
        </Link>
    );
};
