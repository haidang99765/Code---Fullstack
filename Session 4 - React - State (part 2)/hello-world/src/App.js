import React, { useState } from "react";
import "./App.css";
import ExpenseItem from "./components/expenseItem";
import Card from "./components/Card";
import ExpenseForm from "./components/expenseForm";

function App() {
  const [expenseData, setExpenseData] = useState([
    {
      id: 1,
      price: 111,
      description: " New Watch",
      date: new Date(2020, 4, 22),
      // Months count from 0-11
    },
    { 
      id: 2,
      price: "299",
      description: " New Bike",
      date: new Date(2020, 5, 22),
    },
    {
      id: 3,
      price: "528",
      description: " New Car",
      date: new Date(2020, 6, 22),
    },
    {
      id: 4,
      price: "2888",
      description: " New House",
      date: new Date(2020, 1, 22),
    },
  ]);

  const handleAddItem = (item) => {
    setExpenseData((prevExpenseData) => {
      return [...prevExpenseData, item];
    })
  }

  return (
    <>
      <ExpenseForm onSubmit={handleAddItem}/>
      <Card>
        {expenseData.map((item) => {
          return <ExpenseItem key={item.id} date={item.date} price={item.price} description={item.description}/>
        })}
      </Card>
    </>
  );
}
export default App;

//className thay cho class
