import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <div className="contact-con">
      <div className="grid-email">
        <i className="envelope outline icon" id="icon-contact"></i>
        <h1 className="h1-contact">Napisz do nas e-mail</h1>
        <h2>Masz pytanie? <br />
        Napisz do nas, a napewno się z Tobą skontaktujemy <br /><br />
        e-mail: <a>minikino@gmail.com</a>
        </h2>
      </div>

      <div>
      <i className="phone volume icon" id="icon-contact"></i>
      <h1 className="h1-contact">Zadzwoń do nas na infolinię</h1>
        <h2>Masz pytanie? <br />

        Nasi fachowcy czekają na Twoje pytania codziennie od 10:00 do 21:00 <br /><br />
        tel: <a>+48 666 66 66 66 66</a>
        </h2>
      </div>
      <br /><br /><br /><br />
    </div>
    );
};

export default Contact;
