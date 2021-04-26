import React, { useState } from 'react'
import "./Expenses.css";
import Card from "..//UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from './ExpensesList';
import ExpensesChart from './ExpensesChart';

const Expenses = (props) => {
  const [filterDate, setFilterDate] = useState('2021');
  const expensesFiltered = props.items.filter(x => {
    return x.date.getFullYear().toString() === filterDate;
    
  });

  const onFilterDateSelectedHandler = (date) => {
    setFilterDate(date);
  }

 
  

  return (
    <div>
      <Card>
        <ExpensesFilter selected={filterDate} dateSelected={onFilterDateSelectedHandler}/>
        <ExpensesChart expenses={expensesFiltered} />
        <ExpensesList items={expensesFiltered} />
      </Card>
    </div>
  );
};

export default Expenses;
