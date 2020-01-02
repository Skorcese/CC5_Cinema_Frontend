import React, { Component } from 'react';
import end from '../../../apis/index';
import RenderMyTickets from './RenderMyTickets';

class MyTickets extends Component {
  state = {
    //Temporarily hardcoded user id
    userId: '5e0a588e1f912e227c2099cf',
    reservations: []
  };

  async componentDidMount() {
    const reservations = await end.get(`/api/reservation/${this.state.userId}`);
    this.setState({
      ...this.state,
      reservations: reservations.data
    });
    console.log(this.state.reservations);
  }

  render() {
    return (
      <div>
        <RenderMyTickets data={this.state.reservations} />
      </div>
    );
  }
}

export default MyTickets;
