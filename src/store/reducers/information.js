import { FETCHFRIENDS, FETCHPOSTS } from "../actions/information";


const initState = {
    friends: [],
    userPost: [],
    postNewFeed: [],
}

const reducer = (state = initState, action) => {
    switch (action.type)    {
        case FETCHFRIENDS : {
            console.log("action", action);
            return{
                ...state,
                friends: action,
            }
        }
        case FETCHPOSTS :{
            return {
                ...state,
                test: action
            }
        }
        default :{
            return state;
        }
    }
    
}

export default reducer;