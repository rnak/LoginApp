import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { requestAuthToken } from '../../actions/AuthTokenAction'
import { Box, H1, EmailInput, PasswordInput, SignInDiv } from './elements';
import { isAuthenticated } from '../../commons/Authenticator'
import { useHistory } from 'react-router-dom';

const LoginPage = (props) => {
  const [userName, setUserName] = useState('admin');
  const [password, setPassword] = useState('abc@123');
  const [error, setError] = useState('');
  const history = useHistory();
  useEffect(() => {
    isAuthenticated() && history.push('/dashboard');
  });

  const handleSubmit = (evt) => {
    evt.preventDefault();
    let email = userName ? userName.trim() : undefined;
    let pass  = password ? password.trim() : undefined;
    if(pass) {
      props.dispatch( requestAuthToken({ email, password: pass }) ) 
    } else {
      return setError('Please provide a password');
    }
    return setError('');
  }

  const handleUserNameChange = (evt) => {
    setUserName(evt.target.value);
    evt.target.value.length ? setError('') : setError('Please provide a userName');
  };
  const handlePassChange = (evt) => {
    setPassword(evt.target.value)
    evt.target.value.length ? setError('') : setError('Please provide a password');
  };
  return (
    <Box>
      <H1>Dashboard</H1>
      <EmailInput type="email" value={userName} onChange={handleUserNameChange} />
      <PasswordInput type="password" value={password} onChange={handlePassChange}/>
      <a href="#">
        <SignInDiv className="btn" error={error} disable={ error ? true : false } onClick={handleSubmit}>Sign In</SignInDiv>
      </a>
    </Box>
  );
}

function mapStateToProps(state) {
  return { 
    login : state.AuthTokenReducer 
  }
}

function mapDispatchToProps(dispatch) {
  return { dispatch };
}
export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);