import styles from './EditColumnItemModalMain.module.sass';
import { database } from '@src/database';
import { Item } from '@src/models';
import { useLiveQuery } from 'dexie-react-hooks';
import EditColumnItemSection from '@Molecules/EditColumnItemSection/EditColumnItemSection';
import { EditColumnItemTitle } from '@Molecules/EditColumnItemTitle/EditColumnItemTitle';
import EditColumnItemDate from '@Molecules/EditColumnItemDate/EditColumnItemDate';
import { EditColumnItemDescription } from '@Molecules/EditColumnItemDescription/EditColumnItemDescription';
import EditColumnItemChecklists from '@Molecules/EditColumnItemChecklists/EditColumnItemChecklists';
import { Title, DateRange, ShortText, CheckBox } from '@mui/icons-material';

export const EditColumnItemModalMain = ({
    columnItem,
}: {
    columnItem: Item;
}) => {
    const tags = useLiveQuery(() => database.tags.toArray());

    return (
        <div className={styles.editColumnItemModalContent__main}>
            {/* TITLE */}
            <EditColumnItemSection icon={<Title />}>
                <EditColumnItemTitle columnItem={columnItem} />
            </EditColumnItemSection>

            {/* TAGS */}
            {/* {currentItem && currentItem.tags.length > 0 && (
                <div className={styles.editColumnItemModalContentMain__tags}>
                    <Label title="Tags">
                        <div
                            className={styles.editColumnItemModalContent__tags}
                        >
                            {currentItem.tags.map((tag, idx) => {
                                const tagRef = tags?.find((t) => t.id === tag);

                                return (
                                    <div
                                        key={idx}
                                        className={
                                            styles.editColumnItemModalContent__tag
                                        }
                                        style={{ background: tagRef?.color }}
                                    >
                                        {tagRef?.title}
                                    </div>
                                );
                            })}
                        </div>
                    </Label>
                </div>
            )} */}

            {/* DATE */}
            <EditColumnItemSection title="Date" icon={<DateRange />}>
                <EditColumnItemDate columnItem={columnItem} />
            </EditColumnItemSection>

            {/* CHECKLISTS */}
            <EditColumnItemSection icon={<CheckBox />}>
                <EditColumnItemChecklists columnItem={columnItem} />
            </EditColumnItemSection>

            {/* DESCRIPTION */}
            <EditColumnItemSection icon={<ShortText />}>
                <EditColumnItemDescription columnItem={columnItem} />
            </EditColumnItemSection>
        </div>
    );
};

export default EditColumnItemModalMain;
