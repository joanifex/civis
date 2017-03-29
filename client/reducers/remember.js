const remember = (state = false, action) => {
  switch(action.type) {
    case 'CLEAR_REMEMBER':
      return false;
    default:
      return state;
  }
}
export default remember;
