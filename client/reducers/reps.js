const reps = (state = ['loading'], action) => {
  switch(action.type) {
    case 'UPDATE_REPS':
      return action.reps;
    case 'RESET_REPS':
      return [];
    case 'RESET_ARTICLES':
      return state.map ( rep => {
        debugger
        if ( rep.id === action.id ) {
          return Object.assign(...Object.keys(rep).map( key => {
            if ( key === "new_articles" )
              return { [key]: 0 }
            else
              return { [key]: rep[key]}
            }));
          }
        else {
          return rep
        }
      });
    default:
      return state;
  }
}

export default reps;
