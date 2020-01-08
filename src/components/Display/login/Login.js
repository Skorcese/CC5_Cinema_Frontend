import React from 'react';
import end from '../../../apis';
import RenderLogin from './RenderLogin';

// Cała logika przeniesiona do RenderLogin
class Login extends React.Component{
  state = { login: false };

  render(){
    return (
      <RenderLogin logged={this.state.login} />

    );
  }
};

export default Login;