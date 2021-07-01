import React from "react";
import ChartBar from "./ChartBar";
import "./Chart.css";
import Card from "../UI/Card";

function chart(props) {
  let monthlyExpenseArray = [];
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
        return (
          +expense.date.toLocaleString("default", { month: "numeric" }) === i + 1
        );
      })
      .reduce((acc, expense) => acc + expense.amount, 0);
  }
  const max = Math.max(...monthlyExpenseArray);

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
