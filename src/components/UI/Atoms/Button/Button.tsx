import styles from './Button.module.scss';
import cn from 'classnames';
import { ButtonProps } from './Button.types';

const Button = ({ children, className, variant = 'default', type = 'button', onClick, icon }: ButtonProps) => {
    return (
        <button
            type={type}
            className={cn(
                className,
                styles.button,
                styles[`button--${variant}`],
                icon && styles['button--icon'],
                styles[`button--${type}`],
            )}
            onClick={onClick}
        >
            {children}
        </button>
    );
};

export default Button;
