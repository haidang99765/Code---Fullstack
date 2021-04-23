import React from 'react';
import './App.css';
import ExpenseItem from './components/expenseItem'; //với thẻ tự định nghĩa thì phải viết hoa chữ cái đầu tiên

function App() { //đây là 1 React component, và đây cũng là JSX, JSX là JS + XML (HTML là 1 tập con của XML)
  return (
    <div className="App"> 
      <ExpenseItem price='200$' name="Dell">
        <button>Click me</button>
      </ExpenseItem>
      <ExpenseItem price='50$'  name="Asus"/> 
      <ExpenseItem price='100$'  name="Gigabyte"/> 
      <ExpenseItem price='2000$'  name="Steelseries"/> 
    </div>
    );
}

export default App;
