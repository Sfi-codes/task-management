import TaskList from "./components/TaskList";
import TaskForm from "./components/TaskForm";
import CurrentTask from "./components/CurrentTask";

function App() {

  const timeToAllocateForTask = (rating) => {
    switch (rating) {
      case "easy":
        return 25;

      case "medium":
        return 50;
      case "hard":
        return 75;
    }
  };

  // const currentlySelectedTask = (event) => {
  //   setCurrentTask(tasks[event.target.value-1])
  // }

  // const pomodoroTimer = () => {
  //   return (
  //     <div>
  //       <div>{counter}</div>
  //       <button onClick={() => setCounter(counter-1)}>Start</button>
  //     </div>
  //   )
  // }

  return (
    <div>
      <TaskForm/>
      <TaskList/>
      {/* <select onChange={currentlySelectedTask}>
        {tasks.map((task, index) => {
          return (
            <option key={task.id}>{index+1}</option>
          )
        })}
      </select> */}
      {/* <CurrentTask currentTask={currentTask} />
      <div>{pomodoroTimer()}</div> */}
    </div>
  );
}

export default App;
