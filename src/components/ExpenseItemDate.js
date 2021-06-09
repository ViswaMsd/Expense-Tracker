import React from 'react'
import './ExpenseItemDate.css';
import Card from "./Card";


function ExpenseItemDate(props) {
    return (
      <Card className="expenseItem__date">
        <div className='month'>{props.date.toLocaleString("default", { month: "short" })}</div>
        <div className='year'>{props.date.toLocaleString("default", { year: "numeric" })}</div>
        <div className='day'>{props.date.toLocaleString("default", { day: "2-digit" })}</div>
      </Card>
    );
}

export default ExpenseItemDate
