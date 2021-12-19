import React, { useState } from "react";
import "./ExpenseForm.css";
function ExpenseForm(props) {
  // useState hook for updating state variable
  // APPROACH 1 MULTIPLE STATES
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enterededDate, setEnteredDate] = useState("");

  // APPROACH 2 SINGLE STATE WITH OBJECT {}
  // const [userInput, setUserInput] = useState({
  //   enteredTitle: "",
  //   enteredAmount: "",
  //   enteredDate: "",
  // });

  //   console.log(userInput);

  const titleChangeHandler = (event) => {
    // APPROACH 1 FOR MULTIPLE STATES
    setEnteredTitle(event.target.value);

    // console.log(enteredTitle);

    // APPROACH 2 USING SPREAD OPERATOR
    // setUserInput({ ...userInput, enteredTitle: event.target.value });

    // APPROACH 2 USING ARROW FUNCTION AND WHEN STATE DEPENDS ON PREVIOUS STATE
    // setUserInput((prevState) => {
    //   return { ...prevState, enteredTitle: event.target.value };
    // });
    // console.log(userInput);
  };

  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
    // console.log(enteredAmount);
    // setUserInput({ ...userInput, enteredAmount: event.target.value });

    // setUserInput((prevState) => {
    //   return { ...prevState, enteredAmount: event.target.value };
    // });
    // console.log(userInput);
  };
  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
    // console.log(enterededDate);
    // setUserInput({ ...userInput, enteredDate: event.target.value });

    // setUserInput((prevState) => {
    //   return { ...prevState, enteredDate: event.target.value };
    // });

    // console.log(userInput);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    // APPROACH 1
    const expenseData = {
      title: enteredTitle,
      amount: + enteredAmount,
      date: new Date(enterededDate),
    };
    // console.log(expenseData);
    props.onSaveExpenseData(expenseData);
    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");

    // APPROACH 2
    // const expenseData = { ...userInput };
    // APPROACH 2 (GIVING NEW KEY NAMES INSTEAD OF OLD KEY NAMES)
    //   const expenseData = {
    //     title: userInput.enteredTitle,
    //     amount: userInput.enteredAmount,
    //     date: new Date(userInput.enteredDate),
    //   };
    //   console.log(expenseData);
    // };
  };
  return (
    // handling form submission
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            onChange={titleChangeHandler} // listening to user input
            value={enteredTitle} // two way binding
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            onChange={amountChangeHandler}
            value={enteredAmount} // two way binding
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="Date"
            min="2019-01-01"
            max="2022-12-31"
            onChange={dateChangeHandler}
            value={enterededDate} // two way binding
          />
        </div>
        <div className="new-expense__actions">
          <button type="button" onClick={props.onCancel}>Cancel</button>
          <button type="submit">Add Expense</button>
        </div>
      </div>
    </form>
  );
}
export default ExpenseForm;
