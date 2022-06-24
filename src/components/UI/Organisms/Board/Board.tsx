import styles from './Board.module.scss';
import BoardHeader from '@Organisms/BoardHeader/BoardHeader';
import CreateColumn from '@Molecules/CreateColumn/CreateColumn';
import { Columns } from '@Organisms/Columns/Columns';

const Board = () => {
    return (
        <div className={styles.board}>
            <BoardHeader />

            <div className={styles.board__columns}>
                <Columns />
                <CreateColumn />
            </div>
        </div>
    );
};

export default Board;
