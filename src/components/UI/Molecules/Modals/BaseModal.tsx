import styles from './BaseModal.module.scss';
import cn from 'classnames';
import ReactModal from 'react-modal';

export const BaseModal = ({
    children,
    title,
    className,
    open,
    onClose,
}: {
    children:
        | React.ReactElement<any, string | React.JSXElementConstructor<any>>
        | React.ReactElement[];
    title?: string;
    className?: string;
    open: boolean;
    onClose: () => void;
}) => {
    return (
        <ReactModal
            isOpen={open}
            onRequestClose={onClose}
            className={cn(className, styles.baseModal)}
        >
            <div className={styles.baseModal__content}>
                <div className={styles.baseModal__header}>{title}</div>

                {children}
            </div>
        </ReactModal>
    );
};

export default BaseModal;
