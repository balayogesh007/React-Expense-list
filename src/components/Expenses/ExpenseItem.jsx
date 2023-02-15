import { useState } from 'react';
import { CardWrapper } from '../UI/CardWrapper';
import { ExpenseDate } from './ExpenseDate';
import './ExpenseItem.css';

export const ExpenseItems = (props) => {

    const [title, setTile] = useState(props.title);
    const editTitleHandler = () => {
        setTile("Bala")
        console.log("Button Clicked");
    }
    return(
        <CardWrapper className='expense-item'>
            <ExpenseDate date = {props.date}></ExpenseDate>
            <div className='expense-item-desc'>
                <h4>{title}</h4>
                <div className='expense-item-price'>{props.amount}</div>
            </div>
            <button className='edit-expense' onClick={editTitleHandler}>Edit Title</button>
        </CardWrapper>
    )
}
