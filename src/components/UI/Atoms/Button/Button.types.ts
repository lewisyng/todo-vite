type ButtonVariants =
    | 'default'
    | 'primary'
    | 'secondary'
    | 'tertiary'
    | 'disabled'
    | 'warning';
type ButtonForms = 'outlined' | 'contained' | 'nude';
type ButtonTypes = 'submit' | 'button';

export type ButtonProps = {
    className?: string;
    children: React.ReactNode;
    type?: ButtonTypes;
    variant?: ButtonVariants;
    form?: ButtonForms;
    onClick?: (e?: React.FormEvent) => void;
};
