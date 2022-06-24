import styles from './NoBoardScreen.module.css';
import { Typography } from '@Atoms/Typography/Typography';

export const NoBoardScreen = () => {
    return (
        <div className={styles.noBoardScreen}>
            <div className={styles.noBoardScreen__content}>
                <Typography as="h1">No boards available</Typography>
                <Typography>Create a new board now</Typography>
            </div>
        </div>
    );
};

export default NoBoardScreen;
