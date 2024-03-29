import React, { useState } from 'react';

import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';

const ExpenseItem = (props) => {
    // Returns a function that can be called (Returns a array)
    // First value is the value and second value is the update function
    const [title, setTitle] = useState(props.title);

    const changeTitle = () => {
        // Forces the component to re-render.
        setTitle('updated');
    }

    return (
        <Card className="expense-item">
            <div>
                <ExpenseDate date={props.date}/>
            </div>
            
            <div className="expense-item__description">
                <h2>{title}</h2>
                <div className="expense-item__price">${props.amount}</div>
            </div>
            <button onClick={changeTitle}>Change Title</button>
        </Card>
    )
}

export default ExpenseItem;