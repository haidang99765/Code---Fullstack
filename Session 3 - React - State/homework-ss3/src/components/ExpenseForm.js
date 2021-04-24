import { useState } from "react";
import DateForm from './expenseForm-Item/dateForm'
import ExpenseFilter from './expenseForm-Item/expenseFilter'
import DescriptionForm from './expenseForm-Item/descriptionForm'
import PriceForm from './expenseForm-Item/priceForm'

const ExpenseForm = (props) => {
  // const [description, setDescription] = useState("New PS5");
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Form submitted");
  };
  // const onDescriptionChange = (event) => {
  //   setDescription(event.target.value);
  // };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Description:
            <DescriptionForm/>
          </label>
        </div>
        <div>
          <label>
            Price:
            
            <PriceForm/>
          </label>
        </div>
        <div>
          <label>
            Date:
            <DateForm/>
          </label>
        </div>
        <div>
          <label>
            Filter:
            <ExpenseFilter/>
          </label>
        </div>

        <button type="submit">Add</button>
        <button type="button">Cancel</button>
      </form>
    </div>
  );
};
export default ExpenseForm;
