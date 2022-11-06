import styles from './App.module.scss';
import { FunctionComponent, useEffect, useState } from 'react';
import Header from '@Molecules/Header/Header';
import Board from '@Organisms/Board/Board';
import { database } from '@src/database';
import NoBoardScreen from '@Molecules/NoBoardScreen/NoBoardScreen';
import { useAppDispatch, useAppSelector } from '@hooks/redux';
import { setCurrentBoardId } from '@src/redux/slices/Board/board.actions';
import { useLiveQuery } from 'dexie-react-hooks';
import BackgroundLayer from '@Molecules/BackgroundLayer/BackgroundLayer';
import { setCurrentBoardTitle } from '@src/redux/slices/Board/board.actions';
import { createClient } from '@supabase/supabase-js';
import { supabase } from './supabaseClient';
import Auth from './Auth/Auth';
import Account from './Account/Account';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import SignIn from './routes/SignIn/SignIn';
import SignUp from './routes/SignUp/SignUp';
import UserShell from './UserShell';
import Dashboard from './routes/Dashboard/Dashboard';

const App: FunctionComponent = () => {
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

    const [session, setSession] = useState<any>(null);

    useEffect(() => {
        supabase.auth.getSession().then(({ data: { session } }: any) => {
            setSession(session);
        });

        supabase.auth.onAuthStateChange((_event, session: any) => {
            setSession(session);
        });
    }, []);

    const router = createBrowserRouter([
        {
            path: '/',
            element: !session ? (
                <Auth />
            ) : (
                <UserShell key={session.user.id} session={session} />
            ),
        },
        {
            path: '/signin',
            element: <SignIn />,
        },
        {
            path: '/signup',
            element: <SignUp />,
        },
    ]);

    return (
        <RouterProvider router={router} />
        // <div className={styles.app}>
        /* <BackgroundLayer />
            <Header />

            {currentBoardId ? <Board /> : <NoBoardScreen />} */
        // </div>
    );
};

export default App;
