const taskReducer = (state = "NONE", action) => {
  switch (action.type) {
    case "SET_CURRENT":      
      return action.payload;

    default:
      return state;
  }
};

export const changeCurrentTask = (id) => {
  return {
    type: "SET_CURRENT",
    payload: id,
  }
}

export default taskReducer;
