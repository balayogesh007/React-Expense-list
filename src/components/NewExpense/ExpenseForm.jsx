
import { useState } from 'react'
import './ExpenseForm.css'

export const ExpenseForm = (props) => {
  // const [userInput, setUserInput] = useState({
  //   titleInput: '',
  //   amountInput: '',
  //   dateInput: ''
  // })
  const [titleInput, setTitleInput] = useState('');
  const [amountInput, setAmountInput] = useState('');
  const [dateInput, setDateInput] = useState('');

  const titleInputHandler = (event) => {
    setTitleInput(event.target.value)

    // setUserInput({...userInput, titleInput: event.target.value})

    // setTitleInput((previousState) => {
    //   return {
    //     ...previousState,
    //     titleInput: event.target.value
    //   }
    // })
  }

  const amountInputHandler = (event) => {
    setAmountInput(event.target.value)
  }

  const dateInputHandler = (event) => {
    setDateInput(event.target.value)
  }

  const submitHandler = (event) => {
    event.preventDefault();
    const expenseItemData = {
      title: titleInput,
      amount: amountInput,
      date: dateInput
    }
    console.log("Data", expenseItemData);

    props.onSaveExpenseData(expenseItemData);

    setTitleInput('');
    setAmountInput('');
    setDateInput('');
  }

  return (
    <form onSubmit={submitHandler} className='form_control'>
      <div>
        <div>
          <label className='label_style' htmlFor="title">Title</label>
          <input className='input_style' type="text" value={titleInput} onChange={titleInputHandler}/>
        </div>
        <div>
          <label className='label_style' htmlFor="date">Date</label>
          <input className='input_style' type="date" value={dateInput} min="01-02-2000" max="31-12-2100" onChange={dateInputHandler}/>
        </div>
        <div>
          <label className='label_style' htmlFor="">Amount</label>
          <input className='input_style' type="number" value={amountInput} min="0.01" step="0.01" onChange={amountInputHandler}/>
        </div>
      </div>
      <div>
        <button className='expense_button_action' type="submit">Submit</button>
      </div>
    </form>
  )
}
