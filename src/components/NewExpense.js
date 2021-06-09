import React, { useRef, useEffect } from "react";
import Card from "../UI/Card";
import Button from "../UI/Button";
import "./NewExpense.css";

function NewExpense(props) {
  const refTitle = useRef();
  const refAmount = useRef();
  const refDate = useRef();
  const today = new Date();
  useEffect(() => {
    refDate.current.value =
      today.getFullYear().toString() +
      "-" +
      (today.getMonth() + 1).toString().padStart(2, 0) +
      "-" +
      today.getDate().toString().padStart(2, 0);
  }, []);

  const submitHandler = function (event) {
    event.preventDefault();
    const newExpenseObject = {
      title: refTitle.current.value,
      amount: Number(refAmount.current.value),
      date: new Date(refDate.current.value),
      id: String(Math.random()),
    };
    props.addExpense(newExpenseObject);
    refTitle.current.value = "";
    refAmount.current.value = "";
    refDate.current.value =
      today.getFullYear().toString() +
      "-" +
      (today.getMonth() + 1).toString().padStart(2, 0) +
      "-" +
      today.getDate().toString().padStart(2, 0);
  };

  return (
    <Card className="newExpense">
      <form onSubmit={submitHandler}>
        <div className="formInput">
          <div>
            <input
              className="today"
              type="Date"
              placeholder="dd-mm-yyyy"
              ref={refDate}
              required
            ></input>
          </div>
          <div>
            <input
              type="text"
              placeholder="Item"
              ref={refTitle}
              required
            ></input>
          </div>
          <div>
            <input
              type="number"
              placeholder="Amount"
              ref={refAmount}
              required
            ></input>
          </div>
        </div>
        <Button className="btn--relative" type="submit">
          Add Expense
        </Button>
      </form>
    </Card>
  );
}

export default NewExpense;
