import { Chart } from "../Chart/Chart"



export const ChartExpenses = (props) => {
  const chartData = [
    {label: 'Jan', value: 0 },
    {label: 'Feb', value: 0},
    {label: 'Mar', value: 0},
    {label: 'Apr', value: 0},
    {label: 'May', value: 0},
    {label: 'Jun', value: 0},
    {label: 'Jul', value: 0},
    {label: 'Aug', value: 0},
    {label: 'Sep', value: 0},
    {label: 'Oct', value: 0},
    {label: 'Nov', value: 0},
    {label: 'Dec', value: 0}
  ]
  for (const expense of props.expenses) {
    const expenseMonth = new Date(expense.date).getMonth(); //return index value of the month jan = 0
    chartData[expenseMonth].value = chartData[expenseMonth].value + +expense.amount;

  }
  return (
    <div><Chart data={chartData} /></div>
  )
}
