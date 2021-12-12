import React from "react";
import Month from "./Month";

export default function Year({ yearIndex, year, updateValues }) {
  return (
    <div className="year">
      {year.year}
      <div className="month">
        <div>Total</div>
        <div>{year.months.reduce((a, b) => a + b, 0)}</div>
      </div>
      <div>
        {year.months.map((month, index) => (
          <Month
            key={`${yearIndex}${index}`}
            yearIndex={yearIndex}
            monthIndex={index}
            month={month}
            updateValues={updateValues}
          />
        ))}
      </div>
    </div>
  );
}
