import "./App.css";
import React from "react";
import Year from "./components/Year";

const asyncData = [
  {
    year: 2021,
    months: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  },
  {
    year: 2020,
    months: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  },
];

function App() {
  const [data, setData] = React.useState("");

  React.useEffect(() => {
    setData(asyncData);
  }, []);

  const updateValues = (yearIndex, monthIndex, value) => {
    setData((prevData) => {
      const newData = [...prevData];
      const newYear = { ...newData[yearIndex] };
      const newYearValues = [...newYear.months];
      newYearValues[monthIndex] = value;
      newYear.months = newYearValues;
      newData[yearIndex] = newYear;

      return newData;
    });
  };

  return data
    ? data.map((year, index) => (
        <Year
          key={year.year}
          yearIndex={index}
          year={year}
          updateValues={updateValues}
        />
      ))
    : "";
}

export default App;
