import { AUTHENTICATION } from "../actions/auth";

const initState = {
    user: null,
    userId: null,
    test: null,
}

const reducer = (state = initState, action) => {
    switch (action.type)    {
        case AUTHENTICATION : {
            return{
                ...state,
                userId: action.user.id,
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