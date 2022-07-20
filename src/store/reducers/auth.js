import { AUTHENTICATION } from "../actions/auth";

const initState = {
  user: null,
  userId: null,
  test: null,
};



const mainReducer = (state = initState, action) => {
  switch (action.type) {
    case AUTHENTICATION: {
      // console.log("action", action);
      // console.log("id", action.id);
      state = { ...state, userId: action.id };
      break;
    }
    case "SAVEUSER": {
      console.log("action", action);
      console.log("user", action.user);
      state = {
        ...state,
        user: action.user,
      };
      break;
    }
    default: return state;
  }
  // console.log("state", state);
  return state;
};

export default mainReducer;
