import { CardWrapper } from '../UI/CardWrapper';
import { ExpenseDate } from './ExpenseDate';
import './ExpenseItem.css';

export const ExpenseItems = (props) => {

    return(
        <CardWrapper className='expense-item'>
            <ExpenseDate date = {props.date}></ExpenseDate>
            <div className='expense-item-desc'>
                <h4>{props.title}</h4>
                <div className='expense-item-price'>Rs. {props.amount}</div>
            </div>
            {/* <button className='edit-expense' onClick={editTitleHandler}>Edit Title</button> */}
        </CardWrapper>
    )
}
