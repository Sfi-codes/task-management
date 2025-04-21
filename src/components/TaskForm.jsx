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

  return (
    <form onSubmit={addTask} style={{textAlign: 'center', padding: '50px'}}>
      <p><input id="content" type= "text" placeholder={'Add a new Task'} style={{
        height: '30px',
        width:'232px',
        fontSize: 'large',
      }}></input></p>
      <p><input style={{
        height: '20px',
        width:'232px',
      }} placeholder="Prequisites"></input></p>
      <p><button style={{width: '78px', height: '20px'}}>Easy</button> <button style={{width: '78px', height: '20px'}}>Medium</button> <button style={{width: '78px', height: '20px'}}>Hard</button></p>
      {/* <select id="rating">
        <option value="Easy">Easy</option>
        <option value="Medium">Medium</option>
        <option value="Hard">Hard</option>
      </select> */}
      <p><button>add</button></p>
    </form>
  );
};

export default TaskForm;
