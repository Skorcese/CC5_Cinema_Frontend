import React, { Component } from 'react';
import end from '../../../apis/index';
import RenderMovie from './RenderMovie';
import BuyTicket from '../reservation/BuyTicket';
import '../../tickets/myTickets/MyTickets.css';

class Reservation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user_id: window.localStorage.getItem('userId'),
      movie_id: '',
      movie: null
    };
  }

  async componentDidMount() {
    const movie_id = await window.localStorage.getItem('movieId');

    //Save user_id in localStorage
    window.localStorage.setItem('user_id', this.state.user_id);

    this.setState({
      ...this.state,
      movie_id
    });

    const movie = await end.get(`/api/movies/${this.state.movie_id}`);
    this.setState({
      ...this.state,
      movie: [movie]
    });
  }

  render() {
    if (this.state.user_id === '' || this.state.user_id === null) {
      return (
        <div className="page-wrapper">
          <div className="logging-needed">Musisz się zalogować!</div>
        </div>
      );
    } else {
      return (
        <div className="page-wrapper">
          {this.state.movie !== null ? (
            <div>
              <RenderMovie data={this.state.movie} />
            </div>
          ) : (
            'film'
          )}

          {this.state.movie !== null ? (
            <div>
              <BuyTicket
                movie_id={this.state.movie_id}
                user_id={this.state.user_id}
              />
            </div>
          ) : (
            'film'
          )}
        </div>
      );
    }
  }
}

export default Reservation;
