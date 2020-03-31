
import { takeLatest } from 'redux-saga/effects'
import { TOKEN_REQUESTED, DELETE_TOKEN }  from '../actions/AuthTokenAction'
import * as LoginSagas from './LoginSagas';
import * as UserSagas from './UserSagas';
import { USER_LIST_REQUESTED, USER_REQUESTED } from '../actions/UserAction';


export function* watchUserLogin()
{
	yield takeLatest( TOKEN_REQUESTED , LoginSagas.doUserLogin );
}

export function* watchUserLogout()
{
	yield takeLatest( DELETE_TOKEN , LoginSagas.doUserLogout );
}

export function* watchgetUserList() 
{
	yield takeLatest(USER_LIST_REQUESTED, UserSagas.getUserList);
}

export function* watchgetUserById()
{
	yield takeLatest(USER_REQUESTED, UserSagas.getUserById);
}