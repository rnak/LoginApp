import produce from "immer";
import { USER_LIST_REQUESTED, USER_LIST_RESPONSE, USER_LIST_FAILED, USER_REQUESTED, USER_RESPONSE, USER_REMOVE } from '../actions/UserAction'
const UserReducer		=	produce(( draft = { isFetching: false , error: "", users: [], selectedUser: undefined } , action ) => {
    console.log(action)
    switch( action.type )
    {
        case USER_LIST_REQUESTED:
            draft.isFetching = true;
            draft.error = "";
            draft.users = [];
            break;
        case USER_LIST_RESPONSE:
            draft.isFetching = false;
            draft.error = "";
            draft.users = action.userList;
            break;
        case USER_LIST_FAILED : 
            draft.isFetching = false;
            draft.error = action.errorResponse.error;
            draft.users = [];
            break;
        case USER_REQUESTED :
            draft.selectedUser = undefined;
            break;
        case USER_REMOVE :
            draft.selectedUser = undefined;
            break;
        case USER_RESPONSE :
            draft.selectedUser = action.user;
            break;
                
    };
    return draft;
})
export default UserReducer;