export const USER_LIST_REQUESTED	=	"USER_LIST_REQUESTED"
export const USER_LIST_RESPONSE	    =	"USER_LIST_RESPONSE"
export const USER_LIST_FAILED		=	"USER_LIST_FAILED"

export const requestUserList	=	()	=>	({
	type : USER_LIST_REQUESTED
})

export const userListResponse	=	userList	=>	({
	type : USER_LIST_RESPONSE,
	userList
})

export const userListFailed	=	( errorResponse ) =>	({
	type : USER_LIST_FAILED,
	errorResponse
});

export const USER_REQUESTED		=	"USER_REQUESTED"
export const USER_RESPONSE	    =	"USER_RESPONSE"
export const USER_REMOVE		=	"USER_REMOVE"

export const requestUser	=	(id)	=>	({
	type : USER_REQUESTED,
	id
})

export const userResponse	=	user	=>	({
	type : USER_RESPONSE,
	user
})

export const userRemove	=	() =>	({
	type : USER_REMOVE
});