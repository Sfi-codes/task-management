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

  return (
    <div>
      {tasks.map((item) => {
        return (
          <div
            key={item.id}
            style={{
              display: "grid",
              gridTemplateColumns: "90% 10%",
              margin: "10px",
            }}
          >
            <div
              style={{ fontSize: "large" }}
              onClick={() => changeCurrentTaskShown(item)}
            >
              {item.content} by <Date></Date>
            </div>
            <div>
              <button
                style={{ height: "20px", width: "80px" }}
                onClick={() => removeTaskFromList(item.id)}
              >
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
