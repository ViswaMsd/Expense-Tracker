import React, { useState } from "react";
import ExpensesFilter from "./ExpensesFilter";
import Chart from "./Chart";
import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import "./Expense.css";

function Expense(props) {
  const currentYear = new Date();
  const [filteredYear, setFilterYear] = useState(
    `${currentYear.getFullYear()}`
  );

  const filteredExpenses = props.expenses.filter(
    (expense) =>
      expense.date.toLocaleString("default", { year: "numeric" }) ==
      filteredYear
  );

  const onFilterChange = function (Year) {
    setFilterYear(Year);
  };
  return (
    <Card className="expense">
      <ExpensesFilter
        selectedYear={filteredYear}
        onFilterChange={onFilterChange}
      ></ExpensesFilter>
      <Chart filteredExpenses={filteredExpenses} />
      {filteredExpenses.map((expense) => (
        <ExpenseItem
          key={expense.id}
          date={expense.date}
          title={expense.title}
          amount={expense.amount}
        ></ExpenseItem>
      ))}
    </Card>
  );
}

export default Expense;
