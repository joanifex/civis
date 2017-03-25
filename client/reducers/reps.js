const reps = (state = [ 'loading' ], action) => {
  switch(action.type) {
    case 'UPDATE_REPS':
      return action.reps;
    case 'RESET_REPS':
      return [ 'loading' ];
    default:
      return state;
  }
}

export default reps;
