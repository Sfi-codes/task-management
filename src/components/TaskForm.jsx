import { useDispatch } from "react-redux";
import { addNewTask } from "../reducers/taskListReducer.js";

const TaskForm = () => {
  const dispatch = useDispatch();

  const addTask = (event) => {
    event.preventDefault();
    const newTask = {
      id: Math.random,
      content: event.target.content.value,
      rating: event.target.rating.value,
    };

    dispatch(addNewTask(newTask));
  };

  const featureContainer = {
    border: '1px solid black', display: "flex", flexDirection: 'column',  borderRadius: '15px'
  }
  
  return (
    <form onSubmit={addTask} style={featureContainer}>
      <input id="content" type="text" placeholder={'Add a new Task'}></input>
      <input placeholder="Prequisites"></input>
      <div><button>Easy</button> <button>Medium</button> <button>Hard</button></div>
      <button>Add new task</button>
    </form>
  );
};

export default TaskForm;
