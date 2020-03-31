import produce from "immer";
import {TOKEN_REQUESTED, TOKEN_RESPONSE, TOKEN_FAILED } from '../actions/AuthTokenAction.js'

const AuthTokenReducer		=	produce(( draft = { isFetching: false , error: "" } , action ) => {
    switch( action.type )
    {
        case TOKEN_REQUESTED:
            draft.isFetching = true;
            draft.error = "";
            break;
        case TOKEN_RESPONSE:
            draft.isFetching = false;
            draft.error = "";
            break;
        case TOKEN_FAILED : 
            draft.isFetching = false;
            draft.error = action.errorResponse.error;
            break;
    };
    return draft;
})
export default AuthTokenReducer;