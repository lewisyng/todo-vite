import { FunctionComponent } from 'react';
import styles from './Heading.module.scss';
import cn from 'classnames';

type Props = {
    children: React.ReactNode;
    weight?: 'normal' | 'bold' | 'extrabold';
    textAlign?: 'left' | 'center' | 'right';
    allCaps?: boolean;
    className?: string;
    title?: string;
    size?: 'base';
};

const Heading: FunctionComponent<Props> = ({ children, className, title, size = 'base', weight = 'normal' }) => {
    return (
        <div
            title={title}
            className={cn(className, styles.heading, styles[`heading--${size}`], styles[`heading--${weight}`])}
        >
            {children}
        </div>
    );
};

export default Heading;
