import { useSelector, useDispatch } from "react-redux";
import { removeTask } from "../reducers/taskReducer.js";

const TaskList = () => {
  const dispatch = useDispatch();
  const tasks = useSelector((state) => state);

  const removeTaskFromList = (id) => {
    dispatch(removeTask(id));
  };

  return (
    <div>
      {tasks.map((item) => {
        return (
          <p key={item.id}>
            <span>
              {item.content} Rating: {item.rating}
            </span>
            <button onClick={() => removeTaskFromList(item.id)}>remove</button>
          </p>
        );
      })}
    </div>
  );
};

export default TaskList;
