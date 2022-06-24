import styles from './CreateNewBoard.module.css';
import AddIcon from '@mui/icons-material/Add';
import { Button } from '@mui/material';
import {CreateNewBoardModal} from '@Molecules/Modals';
import { useModal } from '@hooks/useModal';

export const CreateNewBoard = () => {
    const { isModalOpen, openModal, closeModal } = useModal();

    return (
        <div className={styles.createNewBoard}>
            <Button
                onClick={openModal}
                variant="outlined"
                startIcon={<AddIcon />}
                sx={{ color: 'white', border: '1px solid white' }}
            >
                New Board
            </Button>

            <CreateNewBoardModal open={isModalOpen} handleClose={closeModal} />
        </div>
    );
};

export default CreateNewBoard;
