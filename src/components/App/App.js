import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import Display from '../Display/Display';
import Footer from '../Display/footer/Footer';
import HomePage from '../Display/homePage/HomePage';
import Contact from '../Display/contact/Contact';
import Register from '../Display/register/Register';
import Login from '../Display/login/Login';
import MyTickets from '../tickets/myTickets/MyTickets';
import PriceList from '../Display/priceList/PriceList';
import Reservation from '../tickets/reservation/Reservation';
import './App.css';

const history = createBrowserHistory();

class App extends React.Component {
  render() {
    return (
      <Router history={history}>
        <div>
          <div className="ui container">
            <Display />
            <Route path="/" exact component={HomePage} />
            <Route path="/mini-kino" exact component={HomePage} />
            <Route path="/contact" exact component={Contact} />
            <Route path="/register" exact component={Register} />
            <Route path="/login" exact component={Login} />
            <Route path="/mytickets" exact component={MyTickets} />
            <Route path="/pricelist" exact component={PriceList} />
            <Route path="/reservation" exact component={Reservation} />
          </div>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
