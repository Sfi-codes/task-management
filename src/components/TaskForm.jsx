import { useDispatch } from "react-redux";
import { addNewTask } from "../reducers/taskListReducer.js";
import FormButton from "./FormButton.jsx";
import '../styles/task.css'

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

  const buttonContainer = {
    display: 'flex', gap: '10px'
  }
  return (
    <div id={'featureContainer1'}>
      <form onSubmit={addTask} id={'featureContainer2'}>
        <div style={{ display: 'flex' }}><button style={{ width: '50px', fontSize: '25px', border: '0.1px solid lightgrey', backgroundColor: 'lightgreen' }}>+</button><input style={{ flexGrow: '1', paddingLeft: '10px' }} id="content" type="text" placeholder={'Complete weekly grocery shopping'}></input></div>
        <div style={buttonContainer}><FormButton text={'Easy'}></FormButton> <FormButton text={'Medium'}></FormButton> <FormButton text={'Hard'}></FormButton></div>
      </form>
    </div>
  );
};

export default TaskForm;
