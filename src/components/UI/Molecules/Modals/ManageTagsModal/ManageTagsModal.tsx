import { useState } from 'react';
import styles from './ManageTagsModal.module.sass';
import { useLiveQuery } from 'dexie-react-hooks';
import { database } from '@src/database';
import TagTile from '@Atoms/TagTile/TagTile';
import { BasicModal, CreateTagModal, EditTagModal } from '@Molecules/Modals';
import { useModal } from '@hooks/useModal';
import BaseModal from '../BaseModal';

export const ManageTagsModal = () => {
    const { isModalOpen, closeModal } = useModal();
    const { isModalOpen: isCreateModalOpen, closeModal: closeCreateModal } =
        useModal();
    const { isModalOpen: isEditModalOpen, closeModal: closeEditModal } =
        useModal();
    const [clickedTagTile, setClickedTagTile] = useState<number | null>(null);

    const tags = useLiveQuery(() => database.tags.toArray());
    const [createTagModalOpen, setCreateTagModalOpen] = useState(false);

    const addTile = () => {
        setCreateTagModalOpen(true);
    };

    const deleteTag = (id: number) => {
        database.tags.delete(id);
    };

    return (
        <>
            <BaseModal
                open={isModalOpen}
                onClose={closeModal}
                title="Manage your tags"
            >
                <div className={styles.manageTagsModal__content}>
                    <div className={styles.manageTagsModal__tagTiles}>
                        <TagTile type="addTile" handleAddTile={addTile} />

                        {tags?.map((tag: any, idx: number) => {
                            return (
                                <TagTile
                                    key={idx}
                                    title={tag.title}
                                    color={tag.color}
                                    deleteTag={() =>
                                        deleteTag(tag.id as number)
                                    }
                                    editTag={() => setClickedTagTile(tag.id)}
                                />
                            );
                        })}
                    </div>
                </div>
            </BaseModal>

            <CreateTagModal
                open={createTagModalOpen}
                handleClose={() => setCreateTagModalOpen(false)}
            />

            {clickedTagTile && (
                <EditTagModal
                    id={clickedTagTile as number}
                    open={!!clickedTagTile}
                    handleClose={() => setClickedTagTile(null)}
                />
            )}
        </>
    );
};

export default ManageTagsModal;
