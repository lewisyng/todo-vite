import styles from './BaseModal.module.scss';
import cn from 'classnames';
import ReactModal from 'react-modal';
import Typography from '@Atoms/Typography/Typography';

export const BaseModal = ({
    children,
    title,
    subtitle,
    className,
    open,
    onClose,
}: {
    children:
        | React.ReactElement<any, string | React.JSXElementConstructor<any>>
        | React.ReactElement[];
    title?: string;
    subtitle?: string;
    className?: string;
    open: boolean;
    onClose: () => void;
}) => {
    const modalStyles = {
        overlay: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
        },
    };

    return (
        <ReactModal
            style={modalStyles}
            isOpen={open}
            onRequestClose={onClose}
            className={cn(className, styles['base-modal'])}
        >
            <div className={styles['base-modal__content']}>
                <Typography
                    size="text-lg"
                    weight="medium"
                    className={styles['base-modal__title']}
                >
                    {title}
                </Typography>
                <Typography
                    size="text-sm"
                    weight="normal"
                    className={styles['base-modal__subtitle']}
                >
                    {subtitle}
                </Typography>

                {children}
            </div>
        </ReactModal>
    );
};

export default BaseModal;
