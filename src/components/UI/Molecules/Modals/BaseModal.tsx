import styles from './BaseModal.module.scss';
import cn from 'classnames';
import ReactModal from 'react-modal';
import Typography from '@Atoms/Typography/Typography';
import { ReactNode } from 'react';

export const BaseModal = ({
    children,
    title,
    subtitle,
    className,
    parentSelector,
    open,
    onClose,
    footer,
}: {
    children: React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactElement[];
    title?: string;
    subtitle?: string;
    className?: string;
    parentSelector?: HTMLElement;
    open: boolean;
    onClose: () => void;
    footer?: ReactNode;
}) => {
    const modalStyles = {
        overlay: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            background: 'rgba(0,0,0,0.4)',
            backdropFilter: 'blur(1px)',
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
                <div className={styles['base-modal__content-header']}>
                    {title && (
                        <Typography size="text-lg" weight="medium" className={styles['base-modal__title']}>
                            {title}
                        </Typography>
                    )}
                    {subtitle && (
                        <Typography size="text-sm" weight="normal" className={styles['base-modal__subtitle']}>
                            {subtitle}
                        </Typography>
                    )}
                </div>

                <div className={styles['base-modal__content-body']}>{children}</div>

                {footer && <div className={styles['base-modal__content-footer']}>{footer}</div>}
            </div>
        </ReactModal>
    );
};

export default BaseModal;
