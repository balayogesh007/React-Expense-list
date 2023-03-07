import './ExpenseDate.css';
import moment  from 'moment';

export const ExpenseDate = (props) => {
  console.log("ExpenseDate line 5------", props);
  const month = moment(props.date).format('MMMM');
  const day = moment(props.date).format('DD')
  const year = moment(props.date).year();
  return (
    <div className='expense-list-calendar'>
      <div className='month-name'>{month}</div>
      <div className='day-name'>{day}</div>
      <div className='year-name'>{year}</div>
    </div>
  )
}
