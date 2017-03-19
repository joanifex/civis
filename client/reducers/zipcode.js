const zipcode = (state = "0", action) => {
  switch ( action.type ) {
    case "SET_ZIPCODE":
      return action.zipcode;
    case "RESET_ZIPCODE":
      return "0";
    default:
      return state;
  }
}

export default zipcode;
