import React from 'react';
import {Route, NavLink} from 'react-router-dom';
import PrivateRoute from './components/PrivateRoute';
import Login from './components/login';
import FriendsList from './components/friendsList';
import AddFriend from './components/addFriend';

function App() {
  return (
    <div className="App">
      <Route exact path='/'>
        <h1>Hello Friends!</h1>
        <NavLink to='/login'>
          <h3>Log In</h3>
        </NavLink>
      </Route>

      <Route path='/login'>
        <Login />
      </Route>

      <PrivateRoute path='/friendslist' component={FriendsList} />
      <PrivateRoute path='/friendform' component={AddFriend} />
    </div>
  );
}

export default App;