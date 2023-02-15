
import { useState } from 'react'
import './ExpenseForm.css'

export const ExpenseForm = () => {
  const [userInput, setUserInput] = useState({
    titleInput: '',
    amountInput: '',
    dateInput: ''
  })

  const titleInputHandler = (event) => {
    setUserInput(() => {
      console.log("DateInputHandler", event);
      return {
      ...userInput,
      titleInput: event.target.value
    }
    })
  }

  const amountInputHandler = (event) => {
    setUserInput(() => {
      return {
      ...userInput,
      amountInput: event.target.value
    }
    })
  }

  const dateInputHandler = (event) => {
    setUserInput(() => {
      return {
      ...userInput,
      dateInput: event.target.value
    }
    })
  }
  return (
    <form className='form_control'>
      <div>
        <div>
          <label className='label_style' htmlFor="title">Title</label>
          <input className='input_style' type="text" onChange={titleInputHandler}/>
        </div>
        <div>
          <label className='label_style' htmlFor="date">Date</label>
          <input className='input_style' type="date" min="0.01" step="0.01" onChange={amountInputHandler}/>
        </div>
        <div>
          <label className='label_style' htmlFor="">Amount</label>
          <input className='input_style' type="number" min="12-02-2023" max="12-02-2100" onChange={dateInputHandler}/>
        </div>
      </div>
      <div>
        <button className='expense_button_action' type="submit">Submit</button>
      </div>
    </form>
  )
}
