import Typography from '@src/components/UI/Atoms/Typography/Typography';
import { BoardList } from '@src/components/UI/Molecules/BoardList/BoardList';
import { database } from '@src/database';
import { useLiveQuery } from 'dexie-react-hooks';
import styles from './Home.module.scss';

export const Home = () => {
    const boards = useLiveQuery(() => database.boards.toArray());

    return (
        <div className={styles['home__wrapper']}>
            <div className={styles['home']}>
                <Typography as="h1" weight="bold" size="text-lg" className={styles['home__header']}>
                    Select a board
                </Typography>

                {boards && <BoardList boards={boards} />}
            </div>
        </div>
    );
};
