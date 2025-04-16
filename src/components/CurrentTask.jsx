
const CurrentTask = (props) => {
  const currentTask = props.currentTask
  return (
    <div style={{float: 'inline-end'}}>
      <div>Current task: {currentTask.content}</div>
      <p>Prequisites</p>
      <ul>
        <li>step 1</li>
        <li>step 2</li>
      </ul>
      <p>Task 1</p>
      <p>steps to complete task:</p>
      <ul>
        <li>step 1</li>
        <li>step 2</li>
      </ul>
      <p>Time to complete: {currentTask.time} minutes</p>
      <p>Pomodoro Intervals: {currentTask.time / 25}</p>
    </div>
  )
}

export default CurrentTask