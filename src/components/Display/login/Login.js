import React, { useState } from 'react';
import end from '../../../apis';

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleClick = async () => {
    console.log(email, password)

    let obj = {
      email,
      password
    }

    const result = await end.post('api/auth', JSON.stringify(obj))

    console.log(result)
  }

    return (
      <div className="ui container">
        <h1 className="ui inverted center aligned header">Logowanie</h1>
        <div className="ui inverted segment">
          <div className="ui inverted form">
            <div className="one field">
              <div className="field">
                <label>E-mail</label>
                <input
                  placeholder="E-mail"
                  type="email"
                  onChange={e => setEmail(e.target.value)}
                />
              </div>
            </div>
            <div className="one field">
              <div className="field">
                <label>Hasło</label>
                <input
                  placeholder="Hasło"
                  type="password"
                  onChange={e => setPassword(e.target.value)}
                />
              </div>
            </div>
            <div className="ui submit button" onClick={handleClick}>Zaloguj</div>
          </div>
        </div>
      </div>
    );
};

export default Login;