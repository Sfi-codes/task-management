import TaskList from "./components/TaskList";
import TaskForm from "./components/TaskForm";
import CurrentTask from "./components/CurrentTask";
import { useSelector } from "react-redux";
import './styles/app.css'

function App() {
  const currentTask = useSelector((state) => state.currentTask);

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
      <h1>Task Managment Application</h1>
      <div style={{ display: "grid", gridTemplateColumns: "50% 50%" }}>
        <section>
          <TaskList />
        </section>
        <section>
          {currentTask === `NONE` ? (
             <TaskForm />
          ) : (
            <CurrentTask />
          )}
        </section>
      </div>
    </div>
  );
}

export default App;
