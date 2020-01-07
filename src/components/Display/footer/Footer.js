import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

class Footer extends Component {
  sayHello() {
    window.location.href = 'contact';
  }

  render() {
    return (
      <div className="big-footer">
        <div className="item">
          <h2>NASZE KINA</h2>
          <div className="ui list">
            <div className="item">Katowice</div>
            <div className="item">Kraków</div>
            <div className="item">Łódź</div>
            <div className="item">Poznań</div>
            <div className="item">Sopot</div>
            <div className="item">Warszawa</div>
            <div className="item">Wrocław</div>
            <div className="item">Zgorzelec</div>
          </div>
        </div>

        <div className="item">
          <h2>APLIKACJA MINIKINO</h2>
          <div className="ui list">
            <div className="item">
              <img
                className="footer-app-and"
                src="../../../img/app-and.jpg"
                alt="Android"
              />
            </div>
            <div className="item">
              <img
                className="footer-app-ios"
                src="../../../img/app-mob.jpg"
                alt="IOS"
              />
            </div>
          </div>
        </div>

        <div className="item">
          <h2>KONTAKT</h2>
          <div className="ui list">
            <div className="item contact" onClick={this.sayHello}>
              Kontakt
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
