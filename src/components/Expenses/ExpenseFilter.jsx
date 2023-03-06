import './ExpenseFilter.css';

export const ExpensesFilter = (props) => {
  const dropDownHandler = (event) => {
    props.onChangeFilter(event.target.value);
    }
    return (
    <div>
        <div className='filter-container'>
          <label htmlFor="">Filter by Year</label>
          <select name="" id="" className='select-option' value={props.selected} onChange={dropDownHandler}>
            <option value="2023">2023</option>
            <option value="2022">2022</option>
            <option value="2021">2021</option>
            <option value="2020">2020</option>
          </select>
        </div>
    </div>
  )
}
