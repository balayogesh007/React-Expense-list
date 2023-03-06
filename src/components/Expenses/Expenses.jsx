import { useState } from "react";
import { ExpensesFilter } from "./ExpenseFilter"
import { ExpenseItems } from "./ExpenseItem"

export const Expenses = () => {
  const [filtered, setFiltered] = useState('2020');
  const filterChangeHandler = (yearSelected) => {
    setFiltered(yearSelected);
  }
  return (
    <div>
      <ExpensesFilter selected={filtered} onChangeFilter={filterChangeHandler} />
      <ExpenseItems
      title = {'Breakfast'}
      amount = {'Rs.120'}
      date = {new Date()}
      >
      </ExpenseItems>
      <ExpenseItems
      title = {'Lunch'}
      amount = {'Rs.220'}
      date = {new Date()}
      >
      </ExpenseItems>
    </div>
  )
}
