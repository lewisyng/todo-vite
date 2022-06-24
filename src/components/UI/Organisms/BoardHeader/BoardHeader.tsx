import styles from './BoardHeader.module.scss';
import { useAppSelector } from '@hooks/redux';
import ManageTags from '@src/components/UI/Molecules/ManageTags/ManageTags';
import { ModalUIProvider } from '@hooks/useModal';
import { Typography } from '@Atoms/Typography/Typography';

export const BoardHeader = () => {
    const [colorScheme, boardTitle] = useAppSelector((state) => [
        state.persistedReducer.config.colorScheme,
        state.board.currentBoardTitle,
    ]);

    return (
        <div
            className={styles.boardHeader}
            style={{ backgroundColor: `var(--${colorScheme}-800)` }}
        >
            <Typography weight="bold" style={{ color: 'white' }}>
                {boardTitle}
            </Typography>

            <div className={styles.boardHeader__actions}>
                <ModalUIProvider>
                    <ManageTags />
                </ModalUIProvider>
            </div>
        </div>
    );
};

export default BoardHeader;
