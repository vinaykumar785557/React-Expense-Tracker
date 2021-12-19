import { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 10,
    date: new Date(2021, 12, 12),
  },
  {
    id: "e2",
    title: "laundry detergent",
    amount: 15,
    date: new Date(2021, 10, 11),
  },
  {
    id: "e3",
    title: "Rice bag",
    amount: 20,
    date: new Date(2021, 8, 3),
  },
  {
    id: "e4",
    title: "chicken",
    amount: 30,
    date: new Date(2021, 1, 26),
  },
];

function App() {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);
  const addExpenseHandler = (expense) => {
    // console.log("In App.js");
    // console.log(expense);
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
