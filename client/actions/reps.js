export const updateReps = () => {
  return (dispatch) => {
    $.ajax({
      url: '/api/user_reps',
      type: 'GET',
      dataType: 'JSON'
    }).done( userData => {
      dispatch({ type: 'UPDATE_REPS', reps: userData.reps });
    }).fail( data => {
      console.log(data);
    });
  }
}
