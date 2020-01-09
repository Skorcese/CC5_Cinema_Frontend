import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import NavBar from '../NavBar/NavBar';
import HomePage from '../Display/homePage/HomePage';
import Contact from '../Display/contact/Contact';
import Register from '../Display/register/Register';
import Login from '../Display/login/Login';
import MyTickets from '../tickets/myTickets/MyTickets';
import PriceList from '../Display/priceList/PriceList';
import Reservation from '../tickets/reservation/Reservation';

class Display extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <NavBar />
          <Route path="/" exact component={HomePage} />
          <Route path="/contact" exact component={Contact} />
          <Route path="/register" exact component={Register} />
          <Route path="/login" exact component={Login} />
          <Route path="/mytickets" exact component={MyTickets} />
          <Route path="/pricelist" exact component={PriceList} />
          <Route path="/reservation" component={Reservation} />
        </div>
      </Router>
    );
  }
}

export default Display;
