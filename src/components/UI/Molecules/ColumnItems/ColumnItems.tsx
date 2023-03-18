import styles from './ColumnItems.module.scss';
import ColumnItem from '@Molecules/ColumnItem/ColumnItem';
import { FunctionComponent } from 'react';

type ColumnItemsProps = {
    items: any[];
    handleColumnItemSelect: any;
};

export const ColumnItems: FunctionComponent<ColumnItemsProps> = ({ items, handleColumnItemSelect }) => {
    return (
        <div className={styles['column-items']}>
            {items?.map((columnItem: any) => (
                <ColumnItem
                    key={columnItem.id}
                    columnItem={columnItem}
                    handleColumnItemSelect={handleColumnItemSelect}
                />
            ))}
        </div>
    );
};
