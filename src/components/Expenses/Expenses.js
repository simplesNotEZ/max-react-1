import React, { useState } from "react";

import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card.js";
import ExpensesFilter from "./ExpensesFilter";
import "./Expenses.css";

// arrow-function syntax
const Expenses = (props) => {
  console.log("props in Expenses: ", props);

  const [selectedYear, setSelectedYear] = useState("2019");

  const filteredYearHandler = (year) => {
    setSelectedYear(year);
    console.log("%c In Expenses.js, year is:", "color: blue;", year);
    console.log(
      "%c In Expenses.js, selectedYear is:",
      "color: red;",
      selectedYear
    );
    props.onYearFiltered(year);
  };

  return (
    <Card className="expenses">
      <ExpensesFilter
        defaultYear={selectedYear}
        onYearSelected={filteredYearHandler}
      />
      {props.items.map((expense) => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}
    </Card>
  );
};

export default Expenses;
