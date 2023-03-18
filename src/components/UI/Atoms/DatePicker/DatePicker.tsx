import ReactDatePicker, { ReactDatePickerProps } from 'react-datepicker';
import { FunctionComponent } from 'react';
import 'react-datepicker/dist/react-datepicker.css';
import './DatePicker.scss';

export const DatePicker: FunctionComponent<ReactDatePickerProps> = ({ ...rest }) => {
    return <ReactDatePicker {...rest} />;
};
