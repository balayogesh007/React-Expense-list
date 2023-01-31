
import './CardWrapper.css'

export const CardWrapper = (props) => {
  const classesStyle = 'card ' + props.className
  return (
    <div className={classesStyle}>{props.children}</div>
  )
}