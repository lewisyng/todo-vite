import styles from './ColorSchemesModal.module.css';
import { colorSchemes } from '@src/lib/constants';
import BaseModal from '../BaseModal';

export const ColorSchemesModal = ({
    open,
    handleClose,
    onSelect,
    className,
}: {
    open: boolean;
    handleClose: () => void;
    onSelect: (colorScheme: string) => void;
    className?: string;
}) => {
    return (
        <BaseModal
            open={open}
            onClose={handleClose}
            title="Select a color scheme"
        >
            <div className={styles["color-schemes-modal__color-schemes"]}>
                {colorSchemes.map((colorScheme, idx) => (
                    <div
                        key={idx}
                        className={styles["color-schemes-modal__color-scheme"]}
                        data-color-scheme={colorScheme}
                        onClick={() => onSelect(colorScheme)}
                    ></div>
                ))}
            </div>
        </BaseModal>
    );
};

export default ColorSchemesModal;
