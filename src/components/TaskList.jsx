import { useSelector, useDispatch } from "react-redux";
import { removeTask } from "../reducers/taskListReducer";
import { changeCurrentTask } from "../reducers/currentTaskReducer";

const TaskList = () => {
  const dispatch = useDispatch();
  const tasks = useSelector((state) => state.taskList);

  const removeTaskFromList = (id) => {
    dispatch(removeTask(id));
  };

  const changeCurrentTaskShown = (id) => {
    dispatch(changeCurrentTask(id));
  };
  const featureContainer = {
    border: '1px solid black', maxHeight: ' 100px', overflow: 'auto', borderRadius: '15px'
  }
  

  return (
    <div style={featureContainer}>
      {tasks.map((item) => {
        return (
          <div key={item.id}>
            <div onClick={() => changeCurrentTaskShown(item)}>
              {item.content} by <Date></Date>
            </div>
            <div>
              <button onClick={() => removeTaskFromList(item.id)}>
                Remove
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default TaskList;
