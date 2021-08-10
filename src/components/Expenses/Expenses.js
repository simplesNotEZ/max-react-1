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
  };

  return (
    <Card className="expenses">
      <ExpensesFilter
        defaultYear={selectedYear}
        onYearSelected={filteredYearHandler}
      />
      <ExpenseItem
        title={props.items[0].title}
        amount={props.items[0].amount}
        date={props.items[0].date}
      />
      <ExpenseItem
        title={props.items[1].title}
        amount={props.items[1].amount}
        date={props.items[1].date}
      />
      <ExpenseItem
        title={props.items[2].title}
        amount={props.items[2].amount}
        date={props.items[2].date}
      />
      <ExpenseItem
        title={props.items[3].title}
        amount={props.items[3].amount}
        date={props.items[3].date}
      />
    </Card>
  );
};

export default Expenses;
