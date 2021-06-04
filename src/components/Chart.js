import React from "react";
import ChartBar from "./ChartBar";
import './Chart.css';
import Card from './Card';

function chart(props) {
  let monthlyExpenseArray = [];
  console.log(props.filteredExpenses);
  console.log(monthlyExpenseArray);
  const months = [
    "JAN",
    "FEB",
    "MAR",
    "APR",
    "MAY",
    "JUN",
    "JUL",
    "AUG",
    "SEP",
    "OCT",
    "NOV",
    "DEC",
  ];
  for (let i = 0; i < 12; i++) {
    monthlyExpenseArray[i] = props.filteredExpenses
      .filter((expense) => {
        console.log(expense);
        return (
          expense.date.toLocaleString("default", { month: "numeric" }) == i + 1
        );
      })
      .reduce((acc, expense) => acc + expense.amount, 0);
    console.log(monthlyExpenseArray[i]);
  }
  const max = Math.max(...monthlyExpenseArray);
  console.log(max);
  console.log(monthlyExpenseArray);

  return (
    <Card className="chart">
      {monthlyExpenseArray.map((monthExpense, i) => (
        <ChartBar
          key={months[i]}
          monthExpense={monthExpense}
          maxValue={max}
          lable={months[i]}
        />
      ))}
    </Card>
  );
}

export default chart;
