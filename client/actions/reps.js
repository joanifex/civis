export const updateReps = (reps) => {
  return ({ type: 'UPDATE_REPS', reps });
}

export const resetReps = () => {
  return ({ type: 'RESET_REPS'});
}

export const resetArticles = (id) => {
  return ({ type: 'RESET_ARTICLES', id})
}
