import React, { useState } from "react";
import DatePicker from "react-datepicker";
export  function Dateset () {
  const [date, setDate] = useState(new Date());
  return (
    <div className="date-con">
      <DatePicker selected={date} onChange={(date) => setDate(date)} />
    </div>
  );
}