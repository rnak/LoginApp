import React from 'react'
import { Provider } from 'react-redux'
import LoginPage from '../containers/LoginPage/LoginContainer';
import Dashboard from '../containers/DashBoardPage/DashBoardContainer';
import AlbumContainer from '../containers/Albums/AlbumContainer';
import UserContainer from '../containers/UserPage/UserContainer';
import ConfigureStore from '../store/ConfigureStore';
import { BrowserRouter as Router, Switch, Redirect, Route, useHistory } from 'react-router-dom';

export const store = ConfigureStore();

function App() {
   // const history = useHistory();
   return (
      <Provider store={store}> 
      <Router>
         <div>
         <Switch>
            <Route path='/' exact component={ LoginPage }/>
            <Route path='/login' component={ LoginPage }/>
            <Route path="/dashboard" component={ Dashboard }/>
            <Route path="/users/:id" component={ UserContainer }/>
            <Route path="/albums/:id" component={ AlbumContainer }/>
            <Redirect path="*" to="/" />
         </Switch>
         </div>
	   </Router>
      </Provider>
   )
}
export default App;