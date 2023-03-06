import './App.css';
import { Expenses } from './components/Expenses/Expenses';
import { NewExpense } from './components/NewExpense/NewExpense';
import { CardWrapper } from './components/UI/CardWrapper';

function App() {
  const addExpenseDataHandler = (expenseItems: any) => {
    console.log("In App.tsx");
    console.log(expenseItems);
    return expenseItems
  }
  return (
    <CardWrapper className="App">
      <h2>Expense Items</h2>
      <NewExpense onAddExpense={addExpenseDataHandler} />
      <Expenses/>
    </CardWrapper>
  );
}

export default App;
