import React from 'react'
import './ExpenseItemDate.css';
import Card from "./Card";


function ExpenseItemDate(props) {
    return (
      <Card className="expenseItem__date">
        <div>{props.date.toLocaleString("default", { month: "short" })}</div>
        <div>{props.date.toLocaleString("default", { year: "numeric" })}</div>
        <div>{props.date.toLocaleString("default", { day: "2-digit" })}</div>
      </Card>
    );
}

export default ExpenseItemDate
