import styles from './EditColumnItemDate.module.css';
import { Item } from '@src/models';
import { Label } from '@Atoms/Label/Label';
import { useCallback } from 'react';
import { database } from '@src/database';
import { DatePicker } from '@Atoms/DatePicker/DatePicker';

export const EditColumnItemDate = ({ columnItem }: { columnItem: Item }) => {
    const { startDate, endDate } = columnItem;

    const persistStartDate = useCallback(
        (date: any) => {
            database.items.where('id').equals(columnItem.id!).modify({
                startDate: date,
            });
        },
        [columnItem.id],
    );

    const persistEndDate = useCallback(
        (date: any) => {
            database.items.where('id').equals(columnItem.id!).modify({
                endDate: date,
            });
        },
        [columnItem.id],
    );

    return (
        <div className={styles.editColumnItem__dates}>
            <div className={styles.editColumnItem__date}>
                <Label className={styles.editColumnItemDate__label} title="Start" bold />

                <DatePicker
                    selected={startDate}
                    onChange={persistStartDate}
                    isClearable
                    placeholderText="Select start"
                />
            </div>

            <div className={styles.editColumnItem__date}>
                <Label className={styles.editColumnItemDate__label} title="End" bold />

                <DatePicker selected={startDate} onChange={persistStartDate} isClearable placeholderText="Select end" />
            </div>
        </div>
    );
};

export default EditColumnItemDate;
