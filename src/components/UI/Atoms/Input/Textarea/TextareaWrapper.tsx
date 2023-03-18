import styles from './TextareaWrapper.module.css';
import { Label } from '@Atoms/Label/Label';

export const TextareaWrapper = ({
    children,
    label,
    hint,
}: {
    children: React.ReactNode;
    label?: string;
    hint?: string;
}) => {
    return (
        <div className={styles.textarea__wrapper}>
            {label && <Label className={styles.label} bold title={label} />}

            {children}

            {hint && <div className={styles.hint}>{hint}</div>}
        </div>
    );
};
