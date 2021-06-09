import React, { useState } from "react";
import NewExpense from "./components/NewExpense";
import Expense from "./components/Expense";

function App() {
  const DUMMY_EXPENSES = [
    {
      id: "e1",
      title: "Toilet Paper",
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
    {
      id: "e3",
      title: "Car Insurance",
      amount: 294.67,
      date: new Date(2020, 2, 28),
    },
    {
      id: "e4",
      title: "New Desk (Wooden)",
      amount: 450,
      date: new Date(2021, 5, 12),
    },
    {
      id: "e5",
      title: "Bed",
      amount: 99,
      date: new Date(2021, 5, 12),
    },
    {
      id: "e6",
      title: "ipad",
      amount: 299,
      date: new Date(2019, 5, 12),
    },
    {
      id: "e7",
      title: "Apple Watch",
      amount: 299,
      date: new Date(2020, 1, 12),
    },
    {
      id: "e8",
      title: "Mobile Case",
      amount: 29,
      date: new Date(2020, 2, 12),
    },
    {
      id: "e9",
      title: "Towel",
      amount: 399,
      date: new Date(2020, 3, 12),
    },
    {
      id: "e10",
      title: "Extension Box",
      amount: 10,
      date: new Date(2020, 4, 12),
    },
    {
      id: "e11",
      title: "Door",
      amount: 355,
      date: new Date(2020, 5, 12),
    },
    {
      id: "e12",
      title: "Laptop",
      amount: 799,
      date: new Date(2020, 6, 12),
    },
    {
      id: "e13",
      title: "Cooler",
      amount: 499,
      date: new Date(2020, 7, 12),
    },
    {
      id: "e14",
      title: "Fan",
      amount: 549,
      date: new Date(2020, 8, 12),
    },
    {
      id: "e15",
      title: "Mixer",
      amount: 699,
      date: new Date(2020, 9, 12),
    },
    {
      id: "e16",
      title: "Fridge",
      amount: 1000,
      date: new Date(2020, 10, 12),
    },
    {
      id: "e17",
      title: "Book",
      amount: 15,
      date: new Date(2020, 11, 12),
    },
    {
      id: "e18",
      title: "Oil",
      amount: 500,
      date: new Date(2020, 0, 12),
    },
  ];
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpense = function (newExpense) {
    setExpenses([newExpense, ...expenses]);
  };

  return (
    <>
      <NewExpense addExpense={addExpense}> </NewExpense>
      <Expense expenses={expenses} />
    </>
  );
}

export default App;
