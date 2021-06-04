import React from "react";
import Card from "./Card";
import "./NewExpense.css";

function NewExpense(props) {
  // const [newTitle, setNewTitle] = useState("");
  // const [newAmount, setNewAmount] = useState("");
  // const [newDate, setNewDate] = useState("");

  let newTitle;
  let newAmount;
  let newDate;

  const submitHandler = function (event) {
    event.preventDefault();
    event.target.onBlur = true;
    event.target.reset();
    // console.log(event);
    const newExpenseObject = {
      title: newTitle,
      amount: Number(newAmount),
      date: new Date(newDate),
      id: String(Math.random()),
    };
    props.addExpense(newExpenseObject);
  };
  const titleBlurHandler = function (event) {
    event.preventDefault();
    // setNewTitle(event.target.value);
    newTitle = String(event.target.value);
    console.log(newTitle);
  };
  const amountBlurHandler = function (event) {
    event.preventDefault();
    // setNewAmount(event.target.value);
    newAmount = String(event.target.value);
    console.log(newAmount);
  };
  const dateBlurHandler = function (event) {
    event.preventDefault();
    // setNewDate(event.target.value);
    newDate = String(event.target.value);
    console.log(newDate);
  };

  return (
    <Card className="newExpense">
      <form onSubmit={submitHandler}>
        <div className="formInput">
          <div>
            <input
              type="text"
              placeholder="Item"
              onBlur={titleBlurHandler}
              required
            ></input>
          </div>
          <div>
            <input
              type="number"
              placeholder="Amount"
              onBlur={amountBlurHandler}
              required
            ></input>
          </div>
          <div>
            <input
              type="Date"
              placeholder="dd-mm-yyyy"
              onBlur={dateBlurHandler}
              required
            ></input>
          </div>
        </div>
        <div className="btn">
          <button type="submit">Add Expense</button>
        </div>
      </form>
    </Card>
  );
}

export default NewExpense;
