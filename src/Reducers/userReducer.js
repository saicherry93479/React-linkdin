import { SET_USER } from "../actions/actionType";

const intialState={
    user:null
}

const userReducer=(state=intialState,action)=>{
    switch(action.type)
    {
        case SET_USER:
            return {
                ...state,
                user:action.user
            }

        default:
            return state;

    }

}
export  default userReducer;