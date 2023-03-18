import styles from './EditColumnItemSection.module.css';
import { Label } from '@Atoms/Label/Label';
import IconWrapper from '@Atoms/IconWrapper/IconWrapper';
import { ReactNode } from 'react';

export const EditColumnItemSection = ({
    htmlFor,
    title,
    icon,
    children,
}: {
    htmlFor?: string;
    title?: ReactNode;
    icon?: ReactNode;
    children: ReactNode;
}) => {
    return (
        <div className={styles.editColumnItemSection}>
            <div className={styles.editColumnItemSection__icon}>{/*{icon && <IconWrapper icon={icon} />}*/}</div>

            <div className={styles.editColumnItemSection__content}>
                {title && (
                    <Label htmlFor={htmlFor} title={title} className={styles.editColumnItemSectionContent__label} />
                )}

                {children}
            </div>
        </div>
    );
};

export default EditColumnItemSection;
