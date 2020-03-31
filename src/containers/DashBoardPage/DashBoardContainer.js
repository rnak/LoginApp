import React, {useEffect} from 'react';
import Header from './Header';
import {connect} from 'react-redux';
import { DataDiv, Title } from './elements';
import { Wrapper, ListDiv } from '../../commons/elements'
import { requestUserList } from '../../actions/UserAction';
import { isAuthenticated } from '../../commons/Authenticator'
import { Link, useHistory } from 'react-router-dom';

const DashBoard = (props) => {
  const history = useHistory();
  useEffect(() => {
    !isAuthenticated() && history.push('/login');
  })
  
  useEffect(() => {
    !props.users.length && props.dispatch(requestUserList());
  }, [])

  return (
    <>
      <Header/>
      <Wrapper>
        <Title>USER LIST: </Title>
        {
          props.users.length ? props.users.map((user) => 
                <ListDiv key={user.id}>
                    <Link to={`users/${user.id}`}>
                        <DataDiv>{user.name}</DataDiv>
                        <DataDiv>{user.email}</DataDiv>
                        <DataDiv>{user.phone}</DataDiv>   
                    </Link>     
                </ListDiv>
            ) : "Loading..."
        }
      </Wrapper>
    </>
  );
}
function mapStateToProps(state) {
  return { 
    users : state.UserReducer.users
  }
}
function mapDispatchToProps(dispatch) {
  return { dispatch };
}
export default connect(mapStateToProps, mapDispatchToProps)(DashBoard);
