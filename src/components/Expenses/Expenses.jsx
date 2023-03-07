import { useState } from "react";
import { ExpensesFilter } from "./ExpenseFilter";
import { ExpenseItems } from "./ExpenseItem";
import moment from "moment";

export const Expenses = (props) => {
  const setDefaultYear = moment(new Date()).year().toString();
  const [filtered, setFiltered] = useState(setDefaultYear);
  const filterChangeHandler = (yearSelected) => {
    setFiltered(yearSelected);
  }

  const filterExpenses = props.items.filter((expense) => {
    const dateValue = moment(expense.date).year().toString();
    return dateValue === filtered
  })
  return (
    <div>
      <ExpensesFilter selected={filtered} onChangeFilter={filterChangeHandler} />
      {filterExpenses.length === 0 && <p>No records found</p>}
      {filterExpenses.length > 0 && filterExpenses.map((data) => (
        <ExpenseItems
          key={data.id}
          title={data.title}
          amount={data.amount}
          date={data.date}
        />
      ))}
    </div>
  )
}
