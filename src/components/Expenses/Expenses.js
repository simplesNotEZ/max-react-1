import React, { useState } from "react";

import Card from "../UI/Card.js";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";
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

  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === selectedYear;
  });

  return (
    <Card className="expenses">
      <ExpensesFilter
        defaultYear={selectedYear}
        onYearSelected={filteredYearHandler}
      />
      <ExpensesChart expenses={filteredExpenses} />
      <ExpensesList items={filteredExpenses} />
    </Card>
  );
};

export default Expenses;
