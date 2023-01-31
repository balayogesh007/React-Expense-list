import './ExpenseDate.css';

export const ExpenseDate = (props) => {
  const month = props.date.toLocaleString('en-US', {month: 'long'});
  const day = props.date.toLocaleString('en-US', {day: '2-digit'});
  const year = props.date.getFullYear();
  return (
    <div className='expense-list-calendar'>
      <div className='month-name'>{month}</div>
      <div className='day-name'>{day}</div>
      <div className='year-name'>{year}</div>
    </div>
  )
}