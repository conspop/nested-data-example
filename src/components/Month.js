import React from "react";

const monthMap = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

export default function Month({ yearIndex, monthIndex, month, updateValues }) {
  const [inputValue, setInputValue] = React.useState(month);

  const handleChange = (event) => {
    const value = event.target.value ? parseInt(event.target.value) : 0;
    setInputValue(value);
    updateValues(yearIndex, monthIndex, value);
  };

  return (
    <div className="month">
      <div>{monthMap[monthIndex]}</div>
      <div>
        <input value={inputValue} onChange={handleChange} />
      </div>
    </div>
  );
}
