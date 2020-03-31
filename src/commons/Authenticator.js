import cookie from 'react-cookie'
import { CLIENT_LOGIN_REFERENCE } from './Constants.js'

export const isAuthenticated	=	() => {
	
	console.log('clr===>>' , cookie.load( CLIENT_LOGIN_REFERENCE ) );
	
	if( cookie.load( CLIENT_LOGIN_REFERENCE ) )
		return true;
	return false;
}

export const getAuthToken	=	() => {
	
	console.log('clr===>>' , cookie.load( CLIENT_LOGIN_REFERENCE ) );
	
	return cookie.load( CLIENT_LOGIN_REFERENCE );
}