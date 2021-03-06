import React, { useState } from 'react';
import end from '../../../apis';

const RenderLogin = (props) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [name, setName] = useState(localStorage.getItem('uName'))
  const [surname, setSurname] = useState(localStorage.getItem('uSurname'))

  const handleClick = async () => {
    let credentials = {
      email,
      password
    }

    try{
      const result = await end.post('api/auth', credentials)

      if(localStorage.getItem('token') != result.data[0]){
        localStorage.setItem('token', result.data[0])
        localStorage.setItem('userId', result.data[1])
        setName(localStorage.setItem('uName', result.data[2]))
        setSurname(localStorage.setItem('uSurname', result.data[3]))
      }

      alert('Pomyślnie zalogowano.')
    } catch(err){
      console.log(err)
      alert('Niepoprawny E-mail lub hasło.')
    }
  }

  const handleLogout = () => {
    localStorage.clear()
    alert('Pomyślnie wylogowano.')
  }

  const content = () => {
    if(name){
      return(
        <div>
          <h3 className="ui inverted center aligned header">
            Zalogowano jako:
          </h3>
          <h3 className="ui inverted center aligned header">
            {`${name} ${surname}`}
          </h3>
          <div className="ui fluid submit button" onClick={handleLogout}>Wyloguj</div>
        </div>
      )
    } else {
      return (
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
      )
    }
  }

  return (
    <div className="ui container">
      <h1 className="ui inverted center aligned header">Logowanie</h1>
      <div className="ui inverted segment">
        {content()}
      </div>
    </div>
  );
};

export default RenderLogin;