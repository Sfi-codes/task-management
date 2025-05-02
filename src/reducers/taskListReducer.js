const tasks = [
  {
    id: 0,
    content: "complete task-management project",
    rating: "Medium",
  },
  {
    id: 1,
    content: "setup entega open source project",
    rating: "Hard",
  },
  {
    id: 2,
    content: "Buy gym membership",
    rating: "Easy",
  },
];

const taskReducer = (state = tasks, action) => {
  switch (action.type) {
    case "NEW_TASK":
      return state.concat(action.payload);
    case "REMOVE_TASK":
      return state.filter((task) => task.id !== action.payload);

    default:
      return state;
  }
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
