import styles from './ColorSchemeSelect.module.css';
import { Button } from '@mui/material';
import { setColorScheme } from '@src/redux/slices/Config/config.actions';
import { ColorSchemesModal } from '@Molecules/Modals';
import { useAppDispatch } from '@hooks/redux';
import { useModal } from '@hooks/useModal';

export const ColorSchemeSelect = () => {
    const { isModalOpen, openModal, closeModal } = useModal();
    const dispatch = useAppDispatch();

    return (
        <div className={styles.colorSchemeSelect}>
            <Button
                onClick={openModal}
                variant="outlined"
                sx={{ color: 'white', border: '1px solid white' }}
            >
                Colorschemes
            </Button>

            <ColorSchemesModal
                open={isModalOpen}
                onSelect={(colorScheme) =>
                    dispatch(setColorScheme(colorScheme))
                }
                handleClose={closeModal}
            />
        </div>
    );
};

export default ColorSchemeSelect;
