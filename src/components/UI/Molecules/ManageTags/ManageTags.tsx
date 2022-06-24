import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import ManageTagsModal from '@Molecules/Modals/ManageTagsModal/ManageTagsModal';
import { useModal } from '@hooks/useModal';
import Button from '@Atoms/Button/Button';

export const ManageTags = () => {
    const { openModal } = useModal();

    return (
        <>
            <Button onClick={openModal} form="outlined">
                <LocalOfferIcon />

                <span>TAGS</span>
            </Button>

            <ManageTagsModal />
        </>
    );
};

export default ManageTags;
