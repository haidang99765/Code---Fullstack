import { useState } from "react";
import FormInput from "./formInput.js"

const ExpenseForm = (props) => {
  const [formValue, setFormValue] = useState({
    description: "",
    price: 0,
    date: null,
  })
  const [description, setDescription] = useState(""); //description là 1 biến còn setDescription là 1 function làm thay đổi giá trị biến kia
  const [price, setPrice] = useState(""); //useState ở trên là tương ứng biến kia là 1 string, còn ở đây là 1 number
  const [date, setDate] = useState("");
  const [formVisible, setFormVisible] = useState(false);
  const toggleFormVisible = () => {
    setFormVisible(prev => !prev)
  }
  const handleSubmit = (event) => {
    event.preventDefault();
    props.onSubmit({
      description: description,
      price: price,
      date: new Date(date),
    });
  };
  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };
  const handlePriceChange = (event) => {
    setPrice(event.target.value);
  }
  const handleDateChange = (event) => {
    setDate(event.target.value);
  }
  const handleCancel = () => {
    setPrice("");
    setDate("");
    setDescription("");
    toggleFormVisible();
  }
  return (
    <div>
      {formVisible ? (<form onSubmit={handleSubmit}>
        <FormInput label="Description" type="text" placeholder="Enter description ..." onChange={handleDescriptionChange}/>
        <FormInput label="Price" type="number" placeholder="Enter price ..." value={price} onChange={handlePriceChange}/>
        <FormInput label="Date" type="date" placeholder="Enter date ..." value={date} onChange={handleDateChange}/>
        <div>
        <button type="submit" onSubmit={handleSubmit}>Add</button>
        <button type="button" onClick={handleCancel}>Cancel</button>
        </div>
      </form> 
      ) : (
      <button type="button" onClick={toggleFormVisible}>Add Expense</button>
      )}
  
      
    </div>
  );
};

export default ExpenseForm;
