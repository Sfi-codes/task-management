import { useSelector, useDispatch } from "react-redux";
import { removeTask } from "../reducers/taskListReducer";
import { changeCurrentTask } from "../reducers/currentTaskReducer";
import '../styles/task.css'

const TaskList = () => {
  const dispatch = useDispatch();
  const tasks = useSelector((state) => state.taskList);

  const removeTaskFromList = (event) => {
    event.target.style.backgroundColor === 'white' ? event.target.style.backgroundColor = 'lightgreen' : event.target.style.backgroundColor = 'white'
    // dispatch(removeTask(id));
  };

  const changeCurrentTaskShown = (id) => {
    dispatch(changeCurrentTask(id));
  };

  const taskContainer = {
    display: 'flex', gap: '10px', alignItems: 'center'
  }

  const button = {
    borderRadius: '50%', height: '30px', width: '30px', backgroundColor: 'white', border: '1px solid grey'
  }
  return (
    <div id={'featureContainer1'}>
      <div id={'featureContainer2'}>
        {tasks.map((item) => {
          return (
            <div key={item.id} style={taskContainer}>
              <button style={button} onClick={removeTaskFromList}>
              </button>
              {item.content}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TaskList;
