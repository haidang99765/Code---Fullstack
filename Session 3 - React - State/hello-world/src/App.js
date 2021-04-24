import React from "react";
import "./App.css";
import ExpenseItem from './components/expenseItem';
import Card from "./components/Card";
import ExpenseForm from "./components/ExpenseForm";

function App() {
  const expenseData = [
    {
      price: 111,
      description: " New Watch",
      date: new Date(2020, 4, 22),
      // Months count from 0-11
    },
    {
      price: "299",
      description: " New Bike",
      date: new Date(2020, 5, 22),
    },
    {
      price: "528",
      description: " New Car",
      date: new Date(2020, 6, 22),
    },
    {
      price: "2888",
      description: " New House",
      date: new Date(2020, 1, 22),
    },
  ];

  return (
    <>
      <ExpenseForm />
      <Card>
        <ExpenseItem
          date={expenseData[0].date}
          price={expenseData[0].price}
          description={expenseData[0].description}
        ></ExpenseItem>
        <ExpenseItem
          date={expenseData[1].date}
          price={expenseData[1].price}
          description={expenseData[1].description}
        />
        <ExpenseItem
          date={expenseData[2].date}
          price={expenseData[2].price}
          description={expenseData[2].description}
        />
        <ExpenseItem
          date={expenseData[3].date}
          price={expenseData[3].price}
          description={expenseData[3].description}
        />
      </Card>
    </>
  );
}
export default App;

//className thay cho class
