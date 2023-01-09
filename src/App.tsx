import './App.css';
import { ExpenseItems } from './components/ExpenseItem';
import { CardWrapper } from './components/CardWrapper';

function App() {
  return (
    <CardWrapper className="App">
      <h1>Expense Items</h1>
      <ExpenseItems
      title = {'Breakfast'}
      amount = {'Rs.120'}
      date = {new Date()}
      >
      </ExpenseItems>
    </CardWrapper>
  );
}

export default App;
