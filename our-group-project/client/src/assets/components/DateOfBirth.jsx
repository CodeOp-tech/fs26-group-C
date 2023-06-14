import React, { Fragment, useState } from "react";
import { DatePicker } from "@mui/x-date-pickers";
import dayjs from "dayjs";
 
const DateOfBirth = (props) => {
  const [selectedDate, handleDateChange] = useState(dayjs( new Date()));

  return (
    <Fragment>
      <DatePicker label="Date of Birth" />
    </Fragment>
  );
};

export default DateOfBirth;


const Example = () => {
  const [startDate, setStartDate] = useState(new Date());
  return (
    <DatePicker 
    selected={startDate} 
    onChange={(date) => setStartDate(date)} />
  );
};