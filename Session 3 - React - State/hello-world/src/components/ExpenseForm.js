import { useState } from "react";

const ExpenseForm = () => {
  const [description, setDescription] = useState("New PS5");
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Form submitted");
    console.log(description);
  };
  const onDescriptionChange = (event) => {
    setDescription(event.target.value);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Description:
            <input
              type="text"
              value={description}
              onChange={onDescriptionChange}
            />
          </label>
        </div>
        <div>
          <label>
            Price:
            <input type="number" />
          </label>
        </div>
        <div>
          <label>
            Date:
            <input type="date" />
          </label>
        </div>
        <button type="submit">Add</button>
        <button type="button">Cancel</button>
      </form>
    </div>
  );
};
export default ExpenseForm;
