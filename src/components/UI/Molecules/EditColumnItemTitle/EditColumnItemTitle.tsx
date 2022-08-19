import { useRef, useState, FormEvent } from 'react';
import styles from './EditColumnItemTitle.module.css';
import cn from 'classnames';
import { database } from '@src/database';
import { Item } from '@src/models';
import Input from '../../Atoms/Input/Input';
import { Label } from '../../Atoms/Label/Label';

export const EditColumnItemTitle = ({ columnItem }: { columnItem: Item }) => {
    const { id: columnItemId, title: columnItemTitle } = columnItem;

    const [title, setTitle] = useState(columnItemTitle);
    const [titleFocused, setTitleFocused] = useState(false);

    const inputRef = useRef<HTMLInputElement | null>(null);

    const handleFocus = () => {
        setTitleFocused(true);
    };

    const handleBlur = () => {
        setTitleFocused(false);
        handleTitleSubmit();
    };

    const handleTitleSubmit = (e?: FormEvent) => {
        e?.preventDefault();
        database.items.where('id').equals(columnItemId!).modify({
            title,
        });
        inputRef.current?.blur();
    };

    return (
        <div className={styles.columnHeader__title}>
            {
                <form onSubmit={handleTitleSubmit}>
                    <Label
                        className={styles.editColumnItemDate__label}
                        title="Title"
                        bold
                    />

                    <Input
                        ref={inputRef}
                        type="text"
                        value={title}
                        onFocus={handleFocus}
                        onBlur={handleBlur}
                        onChange={(e) => setTitle(e.target.value)}
                        className={cn(
                            styles.editColumnItem__title,
                            titleFocused && styles.editColumnItemTitle__focused
                        )}
                    />
                </form>
            }
        </div>
    );
};
