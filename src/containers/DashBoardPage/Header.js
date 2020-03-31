import React from 'react';
import { connect } from 'react-redux';
import { deleteAuthToken } from '../../actions/AuthTokenAction'
import { Nav, Ancor } from './elements';
import { useHistory } from 'react-router-dom';

const Header = (props) => {
    const history = useHistory();
    const handleLogout = () => {
        props.dispatch( deleteAuthToken());
        history.push('/login')
    }
    return (
        <Nav>
            <Ancor onClick = {handleLogout} >Logout</Ancor>
        </Nav>
    );
}
function mapDispatchToProps(dispatch) {
    return { dispatch };
}
export default connect(null, mapDispatchToProps)(Header);