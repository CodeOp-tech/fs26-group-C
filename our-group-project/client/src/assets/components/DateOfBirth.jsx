import React, { Fragment, useState } from "react";
import { DatePicker } from "@mui/x-date-pickers";
import dayjs from "dayjs";
 
const DateOfBirth = (props) => {
  const [selectedDate, handleDateChange] = useState(dayjs( new Date()));

  return (
    <Fragment>
      <DatePicker label="Basic date picker" />
    </Fragment>
  );
};

export default DateOfBirth;
