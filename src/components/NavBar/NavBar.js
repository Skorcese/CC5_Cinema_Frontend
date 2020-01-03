import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css'

class NavBar extends React.Component {
  render() {
    return (

      <div className="ui stackable inverted container menu">

      <div className="item">
      <div className="ui item" style={{ color: 'white' }}>
      <i className="fast backward icon"></i>
      <i className="video icon"></i>
      <i className="fast forward icon"></i>
    </div>
      </div>
            <Link to="/" className="item">HomePage</Link>
            <Link to="/pricelist" className="item">Cennik</Link>
            <Link to="/mytickets" className="item">Moje bilety</Link>
            <Link to="/register" className="item" >Rejestracja</Link>
            <Link to="/login" className="item" >Login</Link>
    </div>

    );
  }
}

export default NavBar;
