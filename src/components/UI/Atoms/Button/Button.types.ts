import { FormEvent, ReactNode } from 'react';

type ButtonVariants = 'default' | 'primary' | 'secondary' | 'tertiary' | 'disabled' | 'warning';
type ButtonTypes = 'submit' | 'button';

export type ButtonProps = {
    className?: string;
    children: ReactNode;
    type?: ButtonTypes;
    variant?: ButtonVariants;
    onClick?: (e?: FormEvent) => void;
    icon?: boolean;
};
