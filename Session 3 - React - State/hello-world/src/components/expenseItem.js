import { useState } from "react";
import './expenseItem.css';
import ExpenseDate from "./ExpenseDate";

const ExpenseItem = (props) => {
  const [description, setDescription] = useState(props.description);
  const [backgroundColor, setBackgroundColor] = useState("");
  const changeDescription = () => {
    setDescription("New Description");
    console.log("okeeee!");
    setBackgroundColor("red");
  };
  return (
    <div className="expense-item" style={{ backgroundColor: backgroundColor }}>
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <button onClick={changeDescription}>Change Description</button>
        <div className="expense-item__price">${props.price}</div>
        <h2>{description}</h2>
      </div>
    </div>
  );
};
export default ExpenseItem;
