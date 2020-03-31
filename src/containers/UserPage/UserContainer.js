import React, {useEffect, useState} from 'react';
import {connect} from 'react-redux'
import { isAuthenticated } from '../../commons/Authenticator'
import { requestUser, userResponse, userRemove } from '../../actions/UserAction';
import Header from '../DashBoardPage/Header';
import UserDetails from './UserDetails';
import {  Wrapper } from '../../commons/elements';
import { UserNav, AncorLeft } from './elements';
import {useHistory} from 'react-router-dom';
import Posts from '../Posts/PostContainer';
import AlbumsList from '../Albums/AlbumsList';

const UserContainer = (props) => {
    const history = useHistory();
    const [active, setActive] = useState('posts');
    useEffect(() => {
        !isAuthenticated() && history.push('/login');
    })
    useEffect(() => {
        
        const user = props.selectedUser ? props.selectedUser : props.users.find((user) => user.id == props.match.params.id);
        if (!user) {
            props.dispatch(requestUser(props.match.params.id));
        } 
        else if (user && !props.selectedUser) 
        {
            props.dispatch(userResponse(user));
        }
        return (() => props.dispatch(userRemove()))
    }, []);
    const handlePost = () => {
        setActive('posts');
    }
    const handleAlbum = () => {
        setActive('albums');
    }
    return (
        <>
            <Header/>
            <Wrapper>
                {props.selectedUser ?  <UserDetails user={props.selectedUser}/> : "Loading..."}
                <UserNav>
                    <AncorLeft active={active === "posts"} onClick= {handlePost}>Post</AncorLeft>
                    <AncorLeft active={active === "albums"} onClick = {handleAlbum}>Photo Album</AncorLeft>
                </UserNav>
                {active === 'posts' ? <Posts id={props.match.params.id}/> : <AlbumsList id={props.match.params.id}/>}
            </Wrapper>
            
        </>
    )
}

function mapStateToProps(state) {
    return { 
        users : state.UserReducer.users,
        selectedUser : state.UserReducer.selectedUser,
    }
}
function mapDispatchToProps(dispatch) {
    return { dispatch };
}
export default connect(mapStateToProps, mapDispatchToProps)(UserContainer)