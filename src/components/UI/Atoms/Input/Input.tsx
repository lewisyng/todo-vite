import styles from './Input.module.sass';
import cs from 'classnames';

export const Input = ({
    type = 'text',
    label,
    value,
    onChange,
    onBlur,
    autoFocus,
    className,
}: {
    type?: string;
    label?: string;
    value: string;
    onChange: React.ChangeEventHandler<HTMLTextAreaElement | HTMLInputElement>;
    onBlur?: () => void;
    autoFocus?: boolean;
    className?: string;
}) => (
    <input
        type={type}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        autoFocus={autoFocus}
        className={cs(className, styles.input)}
    />
);

export default Input;
