import React from 'react';
import { DatePicker as KendoDatePicker } from '@progress/kendo-react-dateinputs';

const DatePicker = ({ className, ...otherProps }) => {
  className = className ? ('acme-datepicker ' + className) : 'acme-datepicker';
  return (
    <KendoDatePicker
      {...otherProps}
      className={className} />
  )
}

export default DatePicker;
