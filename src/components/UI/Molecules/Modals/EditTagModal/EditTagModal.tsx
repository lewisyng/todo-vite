import styles from './EditTagModal.module.css';
import { useEffect, useState } from 'react';
import { database } from '@src/database';
import BaseModal from '@Molecules/Modals/BaseModal';
import cn from 'classnames';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import Button from '@Atoms/Button/Button';

export const EditTagModal = ({
    id,
    open,
    handleClose,
}: {
    id: number;
    open: boolean;
    handleClose: () => void;
}) => {
    const [tag, setTag] = useState<any>(null);
    const [title, setTitle] = useState<null | string>(null);

    useEffect(() => {
        const fetchTag = async () => {
            const tag = await database.tags.where('id').equals(id).first();

            if (tag) {
                setTag(tag);
                setTitle(tag.title);
            }
        };

        fetchTag();
    }, []);

    const deleteTag = async () => {
        try {
            database.tags.delete(id);
        } catch (e) {
            console.error('Error', e);
        }

        handleClose();
    };

    const [titleFocused, setTitleFocused] = useState<boolean>(false);
    const handleTitleSubmit = () => {
        database.tags
            .where('id')
            .equals(id as number)
            .modify({
                title,
            });
    };

    if (tag) {
        return (
            <BaseModal open={open} onClose={handleClose} title="Edit your tag">
                <div>
                    <input
                        type="text"
                        name="title"
                        value={title || ''}
                        onFocus={() => setTitleFocused(true)}
                        onBlur={() => {
                            setTitleFocused(false);
                            handleTitleSubmit();
                        }}
                        onChange={(e) => setTitle(e.target.value)}
                        className={cn(
                            styles.editColumnItemModalContent__title,
                            titleFocused &&
                                styles.editColumnItemModalContentTitle__focused
                        )}
                    />

                    {titleFocused && (
                        <Button>
                            <CheckBoxIcon />
                        </Button>
                    )}
                </div>
            </BaseModal>
        );
    }

    return null;
};

export default EditTagModal;
