export const setZipcode = (zipcode) => {
  return (dispatch) => {
    $.ajax({
      url: '/api/zipcode',
      type: 'GET',
      dataType: 'JSON'
    }).done( userData => {
      dispatch({ type: 'SET_ZIPCODE', zipcode: userData.zipcode });
    }).fail( data => {
      console.log(data);
    });
  }
}

export const resetZipcode = () => {
  return { type: 'RESET_ZIPCODE' }
}
