
import { ExpenseForm } from './ExpenseForm';
import './NewExpense.css';

export const NewExpense = (props) => {

  const saveExpenseDataHandler = (usersExpenseData) => {
    const expenseData = {
      ...usersExpenseData,
      id: Math.random().toString()
    }
    console.log(expenseData);
    props.onAddExpense(expenseData);
  }
  return (
    <div>
      <ExpenseForm onSaveExpenseData = {saveExpenseDataHandler} />
    </div>
  )
}
