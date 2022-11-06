import BackgroundLayer from '@src/components/UI/Molecules/BackgroundLayer/BackgroundLayer';
import Header from '@src/components/UI/Molecules/Header/Header';
import NoBoardScreen from '@src/components/UI/Molecules/NoBoardScreen/NoBoardScreen';
import Board from '@src/components/UI/Organisms/Board/Board';
import styles from './Dashboard.module.scss';

const Dashboard = () => {
    // const boards = useLiveQuery(() => database.boards.toArray());

    // const currentBoardId = useAppSelector(
    //     (state) => state.board.currentBoardId
    // );

    // const dispatch = useAppDispatch();

    // useEffect(() => {
    //     const fetchBoards = async () => {
    //         const boards = await database.boards?.toArray();

    //         if (boards?.length) {
    //             dispatch(
    //                 setCurrentBoardId(boards[boards.length - 1].id as number)
    //             );
    //             dispatch(setCurrentBoardTitle(boards[boards.length - 1].title));
    //         }
    //     };

    //     fetchBoards();
    // }, [boards]);

    return (
        <div>
            <h1>Dashboard</h1>

            <div className={styles.app}>
                {/* <BackgroundLayer /> */}
                {/* <Header /> */}
                {/* {currentBoa rdId ? <Board /> : <NoBoardScreen />} */}
            </div>
        </div>
    );
};

export default Dashboard;
