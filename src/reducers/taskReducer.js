const tasks = [
  {
    id: 0,
    content: "complete task-management project",
    rating: "medium",
  },
  {
    id: 1,
    content: "setup entega open source project",
    rating: "hard",
  },
];

const taskReducer = (state = tasks, action) => {
  if (action.type === "NEW_TASK") {
    return state.concat(action.payload);
  }

  if (action.type === "REMOVE_TASK") {
    return state.filter((task) => task.id !== action.payload);
  }
  return state;
};

export const addNewTask = (content) => {
  return {
    type: "NEW_TASK",
    payload: content,
  };
};

export const removeTask = (content) => {
  return {
    type: "REMOVE_TASK",
    payload: content,
  };
};

export default taskReducer;
