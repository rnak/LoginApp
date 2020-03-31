import { call, put } from 'redux-saga/effects'
import * as Ajax from '../xhr/xhrRequestHandler'
import { userListResponse, userListFailed, userResponse, userFailed, userRemove } from '../actions/UserAction';

export function* getUserList() {
	try {
		let response = yield call(Ajax.get, 'users');
		yield put(userListResponse(response));
	}
	catch (e) {
		//To push failed state to store.
		yield put(userListFailed(e.response.error));
		console.error(e);
	}
}

export function* getUserById(req) {
	try {
		let response = yield call(Ajax.get, `users/${req.id}`);
		yield put(userResponse(response));
	}
	catch (e) {
		//To push failed state to store.
		yield put(userRemove());
		console.error(e);
	}
}