export const updateReps = (reps) => {
  return ({ type: 'UPDATE_REPS', reps });
}

export const resetReps = () => {
  return ({ type: 'RESET_REPS'});
}
