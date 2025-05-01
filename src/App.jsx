import TaskList from "./components/TaskList";
import TaskForm from "./components/TaskForm";
import CurrentTask from "./components/CurrentTask";
import { useSelector } from "react-redux";
import './styles/app.css'

//Monotree-features-sections look up for design layout
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
    <div id="application-container">
      <section>
        <TaskList />
      </section>
      <section>
        <TaskForm />
      </section>
    </div>
  );
}

export default App;
