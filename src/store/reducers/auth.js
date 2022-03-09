import { AUTHENTICATION } from "../actions/auth";

const initState = {
    user: null,
    userId: null,
    test: null,
}

const reducer = (state = initState, action) => {
    switch (action.type)    {
        case AUTHENTICATION : {
            console.log("action", action);
            return{
                ...state,
                userId: action.id,
            }
        }
        case "test" :{
            return {
                ...state,
                test: action.test
            }
        }
        default :{
            return state;
        }
    }
    
}

export default reducer;