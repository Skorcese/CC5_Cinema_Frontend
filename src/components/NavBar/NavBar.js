import React from 'react';
import { Link } from 'react-router-dom';

class NavBar extends React.Component {
  render() {
    return (
      <div className="ui top inverted menu">
        <div>
          <div className="ui item" style={{ color: 'white' }}>
            <i className="fast backward icon"></i>
            <i className="video icon"></i>
            <i className="fast forward icon"></i>
          </div>
          <button>
            <Link to="/">HomePage</Link>
          </button>
          <button>
            <Link to="/pricelist">Cennik</Link>
          </button>
          <button>
            <Link to="/mytickets">Moje bilety</Link>
          </button>
          <button>
            <Link to="/contact">Kontakt</Link>
          </button>
          <button>
            <Link to="/register">Rejestracja</Link>
          </button>
          <button>
            <Link to="/login">Login</Link>
          </button>
        </div>
      </div>
    );
  }
}

export default NavBar;
