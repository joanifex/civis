const reps = (state = [], action) => {
  switch(action.type) {
    case 'UPDATE_REPS':
      return action.reps;
    case 'RESET_REPS':
      return [];
    default:
      return state;
  }
}

export default reps;
