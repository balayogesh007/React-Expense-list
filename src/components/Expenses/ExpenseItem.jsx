
import { CardWrapper } from '../UI/CardWrapper';
import { ExpenseDate } from './ExpenseDate';
import './ExpenseItem.css';

export const ExpenseItems = (props) => {

    const editTitleHandler = () => {
        console.log("Button Clicked");
    }
    return(
        <CardWrapper className='expense-item'>
            <ExpenseDate date = {props.date}></ExpenseDate>
            <div className='expense-item-desc'>
                <h4>{props.title}</h4>
                <div className='expense-item-price'>{props.amount}</div>
                <button onClick={editTitleHandler}>Edit Title</button>
            </div>
        </CardWrapper>
    )
}
