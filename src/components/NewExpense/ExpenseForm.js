import React, { useState } from "react";

import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");
  const [formOpened, setFormOpened] = useState(false);

  // Below is method of creating just one slice of state, using useState with an object, versus creating three separate slices of state
  // const [userInput, setUserInput] = useState({
  //   enteredTitle: "",
  //   enteredAmount: "",
  //   enteredDate: "",
  // });

  // Use a function (in setUserInput) to pass in previous-state (prevState) to ensure that you get the latest snapshot of all scheduled state updates;
  // If you don't use a function, you could get a stale snapshot with old state
  // const titleChangeHandler = (event) => {
  //   setUserInput((prevState) => {
  //     return { ...prevState, enteredTitle: event.target.value };
  //   });
  // };

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
  };
  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
  };
  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    };

    props.onSaveExpenseData(expenseData);

    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");

    openCloseFormHandler();
  };

  const openCloseFormHandler = () => {
    setFormOpened((prevState) => {
      return !prevState;
    });
  };

  if (!formOpened) {
    return (
      <div className="new-expense__controls open-form__container">
        <div className="new-expense__control">
          <div className="open-form__div">
            <button onClick={openCloseFormHandler}>Add New Expense</button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={enteredTitle}
            onChange={titleChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={enteredAmount}
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            value={enteredDate}
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="button" onClick={openCloseFormHandler}>
          Cancel
        </button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
