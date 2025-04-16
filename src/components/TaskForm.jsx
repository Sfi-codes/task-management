import { useDispatch } from "react-redux";
import { addNewTask } from "../reducers/taskReducer.js";

const TaskForm = () => {
  const dispatch = useDispatch();

  const addTask = (event) => {
    event.preventDefault();
    const newTask = {
      id: Math.random,
      content: event.target.content.value,
      rating: event.target.rating.value,
      //   time: timeToAllocateForTask(event.target.rating.value),
    };

    dispatch(addNewTask(newTask));
  };

  return (
    <form onSubmit={addTask}>
      <input id="content"></input>
      <select id="rating">
        <option value="easy">Easy</option>
        <option value="medium">Medium</option>
        <option value="hard">Hard</option>
      </select>
      <button>add</button>
    </form>
  );
};

export default TaskForm;
