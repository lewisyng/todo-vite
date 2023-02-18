import styles from './App.module.scss';
import { FunctionComponent, useEffect } from 'react';
import Header from '@Molecules/Header/Header';
import Board from '@Organisms/Board/Board';
import { database } from '@src/database';
import NoBoardScreen from '@Molecules/NoBoardScreen/NoBoardScreen';
import { useAppDispatch, useAppSelector } from '@hooks/redux';
import { useLiveQuery } from 'dexie-react-hooks';
import BackgroundLayer from '@Molecules/BackgroundLayer/BackgroundLayer';
import { setCurrentBoardId, setCurrentBoardTitle } from '@src/redux/slices/boardSlice';
import { useParams } from 'react-router-dom';

const App: FunctionComponent = () => {
    const boards = useLiveQuery(() => database.boards.toArray());

    const { boardId } = useParams();

    // const currentBoardId = useAppSelector((state) => state.board.currentBoardId);

    const dispatch = useAppDispatch();

    // useEffect(() => {
    //     const fetchBoards = async () => {
    //         const boards = await database.boards?.toArray();

    //         if (boards?.length) {
    //             dispatch(setCurrentBoardId(boards[boards.length - 1].id as number));
    //             dispatch(setCurrentBoardTitle(boards[boards.length - 1].title));
    //         }
    //     };

    //     fetchBoards();
    // }, [boards]);

    useEffect(() => {
        if (!boardId) return;

        dispatch(setCurrentBoardId(Number(boardId)));
    }, [boardId]);

    return (
        <div className={styles.app}>
            <BackgroundLayer />
            <Header />

            {boardId ? <Board /> : <NoBoardScreen />}
        </div>
    );
};

export default App;
