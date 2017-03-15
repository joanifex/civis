const reps = (state = [], action) => {
  switch(action.type) {
    case 'UPDATE_REPS':
      // TODO: this is ugly. fix itttttt
      return action.reps.reps
    default:
      return state;
  }
}

export default reps;
