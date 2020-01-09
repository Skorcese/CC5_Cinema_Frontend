import React, { Component } from 'react';
import end from '../../../apis/index';
import RenderMyTickets from './RenderMyTickets';
import './MyTickets.css';

class MyTickets extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user_id: window.localStorage.getItem('userId'),
      reservations: []
    };
  }

  async componentDidMount() {
    console.log(this.state.user_id);
    const reservations = await end.get(
      `/api/reservation/${this.state.user_id}/default`
    );
    this.setState({
      ...this.state,
      reservations: reservations.data
    });
    console.log(this.state.reservations);
  }

  render() {
    console.log(this.state.user_id);
    if (this.state.user_id === '' || this.state.user_id === null) {
      return (
        <div className="page-wrapper">
          <div className="logging-needed">Musisz się zalogować!</div>
        </div>
      );
    } else {
      return (
        <div className="page-wrapper">
          <RenderMyTickets data={this.state.reservations} />
        </div>
      );
    }
  }
}

export default MyTickets;
