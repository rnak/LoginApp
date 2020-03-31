import { put } from 'redux-saga/effects'
import cookie from 'react-cookie'
import { receiveAuthToken, authTokenFailed }  from '../actions/AuthTokenAction'
import { CLIENT_LOGIN_REFERENCE } from '../commons/Constants.js'

export function* doUserLogin( credentials )
{
	try
	{
		if (credentials.cred.email == 'admin' && credentials.cred.password == 'abc@123') {
			const loginResp = 'asdfasdf23wdadf21';
			cookie.save( CLIENT_LOGIN_REFERENCE , loginResp , { path: '/', maxAge: 3600 * 12  });
			yield put( receiveAuthToken(loginResp) );
		}
	}
	catch( e )
	{
		yield put( authTokenFailed( e ) )
		console.error( e );		
	}
}

export function* doUserLogout( credentials )
{
	cookie.remove( CLIENT_LOGIN_REFERENCE , { path: '/' } );
}
