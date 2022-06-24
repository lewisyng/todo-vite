import styles from './App.module.scss';
import { FunctionComponent, useEffect } from 'react';
import Header from '@Molecules/Header/Header';
import Board from '@Organisms/Board/Board';
import { database } from '@src/database';
import NoBoardScreen from '@Molecules/NoBoardScreen/NoBoardScreen';
import { useAppDispatch, useAppSelector } from '@hooks/redux';
import { setCurrentBoardId } from '@src/redux/slices/Board/board.actions';
import { useLiveQuery } from 'dexie-react-hooks';
import BackgroundLayer from '@Molecules/BackgroundLayer/BackgroundLayer';
import { setCurrentBoardTitle } from '@src/redux/slices/Board/board.actions';

const App: FunctionComponent = () => {
    const boards = useLiveQuery(() => database.boards.toArray());

    const currentBoardId = useAppSelector(
        (state) => state.board.currentBoardId
    );

    const dispatch = useAppDispatch();

    useEffect(() => {
        const fetchBoards = async () => {
            const boards = await database.boards?.toArray();

            if (boards?.length) {
                dispatch(
                    setCurrentBoardId(boards[boards.length - 1].id as number)
                );
                dispatch(setCurrentBoardTitle(boards[boards.length - 1].title));
            }
        };

        fetchBoards();
    }, [boards]);

    return (
        <div className={styles.app}>
            <BackgroundLayer />
            <Header />

            {currentBoardId ? <Board /> : <NoBoardScreen />}
        </div>
    );
};

export default App;
