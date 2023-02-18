import { BoardList } from '@src/components/UI/Molecules/BoardList/BoardList';
import { database } from '@src/database';
import { useLiveQuery } from 'dexie-react-hooks';
import styles from './Home.module.scss';

export const Home = () => {
    const boards = useLiveQuery(() => database.boards.toArray());

    console.log('boards', boards);

    return (
        <div className={styles['home__wrapper']}>
            <div className={styles['home']}>
                <h1>Select one of your todo boards</h1>

                {boards && <BoardList boards={boards} />}
            </div>
        </div>
    );
};
