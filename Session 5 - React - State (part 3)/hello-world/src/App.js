import React, { useState } from "react";
import "./App.css";
import ExpenseItem from "./components/expenseItem";
import Card from "./components/Card";
import ExpenseForm from "./components/expenseForm";
import Filter from "./components/Filter"
import Chart from "./components/Chart"

function App() {
  const [selectedYear, setSelectedYear] = useState(2021);
  const [expenseData, setExpenseData] = useState([
    {
      id: 1,
      price: 111,
      description: " New Watch",
      date: new Date(2022, 4, 22),
      // Months count from 0-11
    },
    { 
      id: 2,
      price: 299,
      description: " New Bike",
      date: new Date(2019, 5, 22),
    },
    {
      id: 3,
      price: 528,
      description: " New Car",
      date: new Date(2020, 6, 22),
    },
    {
      id: 4,
      price: 288,
      description: " New House",
      date: new Date(2021, 1, 22),
    },
  ]);

  const matchExpenseData = expenseData.filter((item) => {
    return item.date.getFullYear() === selectedYear;
  });

  const handleSelectedYearChange = (year) => {
    setSelectedYear(year);
  };

  const handleAddItem = (item) => {
    setExpenseData((prevExpenseData) => {
      return [...prevExpenseData, item];
    })
  }

  return (
    <>
      <ExpenseForm onSubmit={handleAddItem}/>
      <Card>
        <Chart data={matchExpenseData}/>
        <Filter year={selectedYear} onChangeYear={handleSelectedYearChange}/>
        {matchExpenseData.map((item) => {
          return <ExpenseItem key={item.id} date={item.date} price={item.price} description={item.description}/>
        })}
      </Card>
    </>
  );
}
export default App;

//className thay cho class
