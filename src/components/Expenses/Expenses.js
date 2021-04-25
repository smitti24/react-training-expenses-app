import React, { useState } from 'react'
import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import Card from "..//UI/Card";
import ExpensesFilter from "./ExpensesFilter";

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
      
      {expensesFiltered.map((item) => (
        <ExpenseItem
          title={item.title}
          amount={item.amount}
          date={item.date}
          key={item.id}
        />
      ))}
        
      </Card>
    </div>
  );
};

export default Expenses;
