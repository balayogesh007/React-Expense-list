import './App.css';
import { ExpenseItems } from './components/Expenses/ExpenseItem';
import { NewExpense } from './components/NewExpense/NewExpense';
import { CardWrapper } from './components/UI/CardWrapper';

function App() {

  return (
    <CardWrapper className="App">
      <NewExpense/>
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
    </CardWrapper>
  );
}

export default App;
