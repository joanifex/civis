export const updateUser = (first_name, last_name) => {
  return (dispatch) => {
    $.ajax({
        type: 'PUT',
        url: '/api/user_update',
        dataType: 'JSON',
        data: { user: { first_name, last_name }}
    }).done (user => {
      dispatch({ type: 'UPDATE_USER', user })
      Materialize.toast('User Name Updated', 3000);
    }).fail (data => {
      console.log(data);
    });
  }
}

export const deleteUser = (id, history) => {
  return (dispatch) => {
    $.ajax({
      type: 'DELETE',
      url: `/api/delete_user/${id}`,
      dataType: 'JSON',
    }).done (user => {
      dispatch({ type: 'DELETE_USER', id })
      history.push('/');
    }).fail (data => {
      console.log(data);
    });
  }
}
