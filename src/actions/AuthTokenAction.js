export const TOKEN_REQUESTED	=	"TOKEN_REQUESTED"
export const TOKEN_RESPONSE	    =	"TOKEN_RESPONSE"
export const TOKEN_FAILED		=	"TOKEN_FAILED"
export const DELETE_TOKEN       =	"DELETE_TOKEN"

export const requestAuthToken	=	(cred)	=>	({
	type : TOKEN_REQUESTED,
	cred
})

export const receiveAuthToken	=	authTokenResponse	=>	({
	type : TOKEN_RESPONSE,
	authTokenResponse
})

export const authTokenFailed	=	( errorResponse ) =>	({
	type : TOKEN_FAILED,
	errorResponse
});

export const deleteAuthToken 	=	() =>	({
	type : DELETE_TOKEN
});
