import styles from './Input.module.sass';
import cs from 'classnames';
import { forwardRef } from 'react';
import { Label } from '../Label/Label';

type InputProps = {
    type?: string;
    label?: string;
    value: string;
    id?: string;
    name?: string;
    onChange: React.ChangeEventHandler<HTMLTextAreaElement | HTMLInputElement>;
    onFocus?: () => void;
    onBlur?: () => void;
    autoFocus?: boolean;
    className?: string;
};

export const Input = forwardRef<HTMLInputElement, InputProps>(
    (
        {
            type = 'text',
            id,
            label,
            value,
            name,
            onChange,
            onBlur,
            onFocus,
            autoFocus,
            className,
        }: InputProps,
        ref
    ) => (
        <div>
            {label && (
                <Label
                    htmlFor={name}
                    className={styles.label}
                    title={label}
                    bold
                />
            )}

            <input
                ref={ref}
                id={id}
                type={type}
                value={value}
                name={name}
                onChange={onChange}
                onFocus={onFocus}
                onBlur={onBlur}
                autoFocus={autoFocus}
                className={cs(className, styles.input)}
            />
        </div>
    )
);

export default Input;
