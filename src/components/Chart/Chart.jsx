
import { ChartBar } from './ChartBar';
import './chart.css';
export const Chart = (props) => {

  const chartDataValues = props.data.map(element => element.value);
  const totalMaxmimum = Math.max(...chartDataValues);
  return (
    <div className='chart-container'>
      {props.data.map((data) => (
      <ChartBar
        key={data.label}
        value={data.value}
        maxValue={totalMaxmimum}
        label={data.label}
      />))}
    </div>
  )
}
