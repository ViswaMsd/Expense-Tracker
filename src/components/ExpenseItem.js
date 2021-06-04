import React from "react";
import "./ExpenseItem.css";
import ExpenseItemDate from "./ExpenseItemDate";
import Card from "./Card";

function ExpenseItem(props) {
  return (
    <Card className="expenseItem">
      <ExpenseItemDate date={props.date}></ExpenseItemDate>
      <div className="expenseItem__description">
        <h2>{props.title}</h2>
        <Card className="expenseItem__description__amount">$ {props.amount}</Card>
      </div>
    </Card>
  );
}

export default ExpenseItem;
