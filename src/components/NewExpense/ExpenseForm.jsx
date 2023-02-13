import './ExpenseForm.css'

export const ExpenseForm = () => {
  return (
    <form className='form_control'>
      <div>
        <div>
          <label className='label_style' htmlFor="title">Title</label>
          <input className='input_style' type="text" />
        </div>
        <div>
          <label className='label_style' htmlFor="date">Date</label>
          <input className='input_style' type="date" min="0.01" step="0.01"/>
        </div>
        <div>
          <label className='label_style' htmlFor="">Amount</label>
          <input className='input_style' type="number" min="12-02-2023" max="12-02-2100"/>
        </div>
      </div>
      <div>
        <button className='expense_button_action' type="submit">Submit</button>
      </div>
    </form>
  )
}
