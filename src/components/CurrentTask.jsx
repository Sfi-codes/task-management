import { useSelector } from "react-redux";

const CurrentTask = () => {
  const currentTask = useSelector((state) => state.currentTask);
  
  const timeToAllocateForTask = (rating) => {
    switch (rating) {
      case "Easy":
        return 25;

      case "Medium":
        return 50;
      case "Hard":
        return 75;
    }
  };

  return (
    <div>
      <h1>{currentTask.content}</h1>
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
      <p>Time to complete: {timeToAllocateForTask(currentTask.rating)} minutes</p>
      <p>Pomodoro Intervals: {timeToAllocateForTask(currentTask.rating) / 25}</p>
    </div>
  );
};

export default CurrentTask;
