import styles from './Button.module.scss';
import cn from 'classnames';
import { ButtonProps } from './Button.types';

const Button = ({
    children,
    className,
    variant = 'default',
    type = 'button',
    form = 'nude',
    onClick,
}: ButtonProps) => {
    return (
        <button
            type={type}
            className={cn(
                className,
                styles.button,
                form && styles[`button--${form}`],
                styles[`button--${type}`],
                styles[`button--${variant}`]
            )}
            onClick={onClick}
        >
            {children}
        </button>
    );
};

export default Button;
