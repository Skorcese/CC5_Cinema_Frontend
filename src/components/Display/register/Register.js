import React, { useState } from 'react';
import end from '../../../apis'

const Register = () => {
  const [name,      setName] = useState('');
  const [surname,   setSurname] = useState('');
  const [email,     setEmail] = useState('');
  const [password,  setPassword] = useState('');
  const [secondPw,  setSecondPw] = useState('');
  const [active,    setActive] = useState("ui submit button")

  const handleClick = async () => {
    let obj = {
      name,
      surname,
      email,
      password
    }

    const result = await end.post('api/users', obj)

    console.log(result)
  }

  const validateForm = () => {
    if(name.length >= 3 && surname.length >= 3 && password.length >=5 && password === secondPw)
      setActive()
    return 
  }
  
  return (
    <div className="ui container">
      <h1 className="ui inverted center aligned header">Rejestracja</h1>
      <div className="ui inverted segment">
        <div className="ui inverted form">
          <div className="two fields">
            <div className="field">
              <label>Imię</label>
              <input
                placeholder="Imię"
                type="text"
                onChange={e => setName(e.target.value)}
              />
            </div>
            <div className="field">
              <label>Nazwisko</label>
              <input
                placeholder="Nazwisko"
                type="text"
                onChange={e => setSurname(e.target.value)}
              />
            </div>
          </div>
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
          <div className="two fields">
            <div className="field">
              <label>Hasło</label>
              <input
                placeholder="Hasło"
                type="password"
                onChange={e => setPassword(e.target.value)}
              />
            </div>
            <div className="field">
              <label>Potwierdź hasło</label>
              <input
                placeholder="Potwierdź hasło"
                type="password"
                onChange={e => setSecondPw(e.target.value)}
              />
            </div>
          </div>
          <div className={active} onClick={handleClick}>Zarejestruj</div>
        </div>
      </div>
    </div>
  );
};

export default Register;