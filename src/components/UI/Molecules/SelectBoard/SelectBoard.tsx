import styles from './SelectBoard.module.scss';
import SelectBoardModal from '@Molecules/Modals/SelectBoardModal/SelectBoardModal';
import { useModal } from '@hooks/useModal';
import Button from '@Atoms/Button/Button';

export const SelectBoard = () => {
    const { isModalOpen, openModal, closeModal } = useModal();

    return (
        <div className={styles.selectBoard}>
            <Button onClick={openModal}>Boards</Button>

            <SelectBoardModal open={isModalOpen} handleClose={closeModal} />
        </div>
    );
};

export default SelectBoard;
