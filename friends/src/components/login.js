import React, {useState} from 'react';
import {useHistory} from 'react-router-dom';
import {axiosWithAuth} from '../utils/axiosWithAuth';

class Login extends React.Component {
    state = {
      credentials: {
        username: '',
        password: ''
      }
    };
  
    handleChange = e => {
      this.setState({
        credentials: {
          ...this.state.credentials,
          [e.target.name]: e.target.value
        }
      });
    };
  
    login = e => {
      e.preventDefault();
        axiosWithAuth()
        .post('/api/login', this.state.userInfo)
        .then(res => {
          window.localStorage.setItem('token', JSON.stringify(res.data.payload));
          this.props.history.push('/private');
        })
        .catch(err => console.log(err.response));
    };
  
    render() {
      return (
        <div>
          <form onSubmit={this.login}>
            <input
              type="text"
              name="username"
              value={this.state.credentials.username}
              onChange={this.handleChange}
            />
            <input
              type="password"
              name="password"
              value={this.state.credentials.password}
              onChange={this.handleChange}
            />
            <button>Log in</button>
          </form>
        </div>
      );
    }
  }
  
  export default Login;
  