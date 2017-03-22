const auth = (state = {}, action) => {
  switch(action.type) {
    case 'LOGIN':
      return {
        isAuthenticated: true,
        ...action.user
      }
    case 'LOGOUT':
      return {}
    case 'UPDATE_USER':
      return {
        ...state,
        ...action.user
      }
    default:
     return state;
  }
}

export default auth;