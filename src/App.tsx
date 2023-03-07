import { useState } from 'react';
import './App.css';
import { Expenses } from './components/Expenses/Expenses';
import { NewExpense } from './components/NewExpense/NewExpense';
import { CardWrapper } from './components/UI/CardWrapper';

  const staticData = [
    {
      id: 1,
      title: 'Breakfast',
      amount: '30',
      date: "2021-05-29"
    },
    {
      id: 2,
      title: 'Lunch',
      amount: '120',
      date: "2020-12-20"
    }
  ]

function App() {
  const [expenses, setExpenses] = useState(staticData)
  const addExpenseDataHandler = (expenseItems: any) => {
    setExpenses((previousItems) => { return [expenseItems, ...previousItems] })
  }

  return (
    <CardWrapper className="App">
      <h2>Expense Items</h2>
      <NewExpense onAddExpense={addExpenseDataHandler} />
      <Expenses items={expenses}/>
    </CardWrapper>
  );
}

export default App;
