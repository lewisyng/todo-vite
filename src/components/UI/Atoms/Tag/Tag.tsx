import cs from 'classnames';
import styles from '@Molecules/Popups/TagsModal/TagsModal.module.sass';
import { FunctionComponent, MouseEvent } from 'react';

type TagProps = {
    active?: boolean;
    onClick: (e: MouseEvent) => void;
    color: string;
    title: string;
};

export const Tag: FunctionComponent<TagProps> = ({ onClick, active, color, title }) => {
    return (
        <div className={cs(styles.tag, active && styles['tag--active'])} onClick={onClick}>
            <div className={styles.tag__color} style={{ background: color }}></div>

            <div className={styles.tag__title}>{title}</div>
        </div>
    );
};
