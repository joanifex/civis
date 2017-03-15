export const updateReps = () => {
  return (dispatch) => {
    $.ajax({
      url: '/api/user_reps',
      type: 'GET',
      dataType: 'JSON'
    }).done( reps => {
      dispatch({ type: 'UPDATE_REPS', reps });
    }).fail( data => {
      console.log(data);
    });
  }
}
