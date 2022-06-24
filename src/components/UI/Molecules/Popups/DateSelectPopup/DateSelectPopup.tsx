import styles from './DateSelectPopup.module.sass';
import PopupWrapper from '../PopupWrapper/PopupWrapper';
import ReactDatePicker from 'react-datepicker';

export const DateSelectPopup = ({
    handleClose,
    value,
    label,
    persistDate,
}: {
    handleClose: () => void;
    value: any;
    label: string;
    persistDate: (date: Date | null) => void;
}) => {
    return (
        <PopupWrapper title={label} handleClose={handleClose}>
            <ReactDatePicker selected={value} onChange={persistDate} />
            {/* <LocalizationProvider dateAdapter={DateAdapter}>
                <div className={styles.datePicker}>
                    <MobileDatePicker
                        inputFormat="DD/MM/YYYY"
                        value={value || new Date()}
                        onChange={persistDate}
                        renderInput={(params: any) => <TextField {...params} />}
                    />
                </div>
            </LocalizationProvider> */}
        </PopupWrapper>
    );
};

export default DateSelectPopup;
