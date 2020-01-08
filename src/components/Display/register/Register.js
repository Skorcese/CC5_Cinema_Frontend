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

    try{
      if(password != secondPw){
        alert('Wprowadzone hasła muszą być takie same.')
      }
      if (name.length < 4 && surname.length < 4 && password.length < 6) {
        alert('Imię i nazwisko musi mieć przynajmniej trzy znaki. Hasło musi mieć przynajmniej 5 znaków.')
      } else {
        const result = await end.post('api/users', obj)
        console.log(result)

        setName('')
        setSurname('')
        setEmail('')
        setPassword('')
        setSecondPw('')
      }
    } catch(err){
      console.log(err)
    }
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
                value={name}
                onChange={e => setName(e.target.value)}
              />
            </div>
            <div className="field">
              <label>Nazwisko</label>
              <input
                placeholder="Nazwisko"
                type="text"
                value={surname}
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
                value={email}
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
                value={password}
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