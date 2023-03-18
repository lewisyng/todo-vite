import styles from './Label.module.sass';
import cn from 'classnames';
import { ReactNode } from 'react';

export const Label = ({
    htmlFor,
    title,
    small,
    bold,
    className,
    children,
}: {
    htmlFor?: string;
    title?: string | ReactNode;
    small?: boolean;
    bold?: boolean;
    className?: string;
    children?: ReactNode;
}) => {
    return (
        <label
            htmlFor={htmlFor}
            className={cn(className, styles.label, small && styles.label__small, bold && styles.label__bold)}
        >
            {title}
            {children}
        </label>
    );
};
