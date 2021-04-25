import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
import React, { useState } from 'react'

const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "Car Insurance",
    amount: 297.54,
    date: new Date(2021, 6, 12),
  },
  {
    id: "e2",
    title: "New TVe",
    amount: 799.54,
    date: new Date(2021, 1, 14),
  },
  {
    id: "e3",
    title: "Desk",
    amount: 50.54,
    date: new Date(2021, 2, 17),
  },
  {
    id: "e4",
    title: "Toilet Paper",
    amount: 100.54,
    date: new Date(2021, 4, 18),
  },
];


const App = () => {

const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense) => {
    setExpenses(prevExpenses => {
      return [expense, ...prevExpenses];
    });
  };

  return (
    <div>
      <NewExpense onExpenseAdded={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
