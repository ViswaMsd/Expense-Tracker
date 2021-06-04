import React, { useState } from "react";
// Component Imports
import ExpenseItem from "./components/ExpenseItem";
import NewExpense from "./components/NewExpense";
import ExpensesFilter from "./components/ExpensesFilter";
import Chart from "./components/Chart";

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
  ];
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);
  const [filteredYear, setFilterYear] = useState("2020");
  const filteredExpenses = expenses.filter(expense => expense.date.toLocaleString('default', { year: 'numeric' }) == filteredYear);

  const addExpense = function (newExpense) {
    setExpenses([newExpense, ...expenses]);
    console.log(expenses);
  };
  const onFilterChange = function (filteredYear) {
    setFilterYear(filteredYear);
  };
  return (
    <div>
      <NewExpense addExpense={addExpense}> </NewExpense>
      <Chart filteredExpenses={filteredExpenses}/>
      <ExpensesFilter
        selectedYear={filteredYear}
        onFilterChange={onFilterChange}
      ></ExpensesFilter>
      {expenses
        .filter(
          (expense) =>
            expense.date.toLocaleString("default", { year: "numeric" }) ==
            filteredYear
        )
        .map((expense) => (
          <ExpenseItem
            key={expense.id}
            date={expense.date}
            title={expense.title}
            amount={expense.amount}
          ></ExpenseItem>
        ))}
    </div>
  );
}

export default App;
