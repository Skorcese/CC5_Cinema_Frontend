import React, { Component } from 'react';
import end from '../../../apis/index';
import AvailableDates from './AvailableDates';
import './BuyTicket.css';

class BuyTicket extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movie_id: 'default',
      user_id: this.props.user_id,
      screenings: [],
      screening_id: 'default'
    };
  }

  async componentDidMount() {
    await this.setState({
      movie_id: this.props.movie_id
    });

    const screenings = await end.get(
      `/api/screening/${this.state.movie_id}/${this.state.screening_id}`
    );

    this.setState({
      ...this.state,
      screenings: screenings.data
    });
  }

  render() {
    return (
      <div>
        <AvailableDates
          user_id={this.state.user_id}
          screenings={this.state.screenings}
        />
      </div>
    );
  }
}

export default BuyTicket;
