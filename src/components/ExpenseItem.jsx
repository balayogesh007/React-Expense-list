
import { CardWrapper } from './CardWrapper';
import { ExpenseDate } from './ExpenseDate';
import './ExpenseItem.css';

export const ExpenseItems = (props) => {
    const expenseCost = 'Rs.130'
    return(
        <CardWrapper className='expense-item'>
            <ExpenseDate date = {props.date}></ExpenseDate>
            <div className='expense-item-desc'>
                <h4>{props.title}</h4>
                <div className='expense-item-price'>{expenseCost}</div>
            </div>
        </CardWrapper>
    )
}
