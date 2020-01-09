import React, { Component } from 'react';
import end from '../../../apis/index';

class AvailableDates extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movie_id: 'default',
      user_id: this.props.user_id,
      screening_id: '',
      room: '',
      rows: [
        //All seats
        { row: 1, seat: [1, 2, 3, 4, 5] },
        { row: 2, seat: [1, 2, 3, 4, 5] },
        { row: 3, seat: [1, 2, 3, 4, 5] },
        { row: 4, seat: [1, 2, 3, 4, 5] },
        { row: 5, seat: [1, 2, 3, 4, 5] }
      ],
      reservationDone: false,
      takenSeats: [],
      freeSeats: [],
      choosenRow: 'Wybierz rząd',
      choosenSeat: 'Wybierz miejsce',
      seat_id: '',
      afterSubmitInfo: ''
    };
    this.rowRef = React.createRef();
    this.seatRef = React.createRef();
    this.reservedRef = React.createRef();
  }

  calculateFreeSeats = async () => {
    // Created to not to modify state directly
    let rows = [
      { row: 1, seat: [1, 2, 3, 4, 5] },
      { row: 2, seat: [1, 2, 3, 4, 5] },
      { row: 3, seat: [1, 2, 3, 4, 5] },
      { row: 4, seat: [1, 2, 3, 4, 5] },
      { row: 5, seat: [1, 2, 3, 4, 5] }
    ];

    // Computes which seats are free
    rows.forEach((elem, index) => {
      this.state.takenSeats.forEach(took => {
        if (took.row === elem.row) {
          elem.seat.forEach(s => {
            if (s === took.seat) {
              delete rows[index].seat[rows[index].seat.indexOf(s)];
            }
          });
        }
      });
    });

    // Indirect change of a state
    await this.setState({
      ...this.state,
      rows: rows
    });
  };

  /*** HANDLER FUNCTIONS ***/
  handleDateOptionChange = async e => {
    e.persist();

    // Forces rerender of rows selector tag
    await this.setState({
      ...this.state,
      rows: []
    });

    await this.setState({
      ...this.state,
      screening_id: e.target.value
    });

    const screening = await end.get(
      `/api/screening/${this.state.movie_id}/${this.state.screening_id}`
    );

    const reservation = await end.get(
      `/api/reservation/default/${this.state.screening_id}`
    );

    await this.setState({
      ...this.state,
      room: screening.data.room_id.name,
      takenSeats: reservation.data.map(reserv => {
        return { row: reserv.seat_id.row, seat: reserv.seat_id.seatNumber };
      })
    });

    // Computes which seats are available in order to rerender app and presents it for a client
    this.calculateFreeSeats();
  };

  handleRowOptionChange = async e => {
    const row = e.target.value;
    console.log(row);

    // Validation of a choosen row
    if (row !== 'Wybierz rząd') {
      const seats = this.state.rows[row - 1].seat;
      await this.setState({
        ...this.state,
        freeSeats: seats,
        choosenRow: row
      });
    } else {
      await this.setState({
        ...this.state,
        choosenRow: row
      });
    }
  };

  handleSeatOptionChange = async e => {
    const seat = e.target.value;
    console.log(seat);
    await this.setState({
      ...this.state,
      choosenSeat: seat
    });
  };

  handleSubmit = async e => {
    e.preventDefault();

    // User input validation
    if (
      this.state.choosenRow === 'Wybierz rząd' ||
      this.state.choosenSeat === 'Wybierz miejsce'
    ) {
      await this.setState({
        ...this.state,
        afterSubmitInfo: 'Musisz dokonać wyboru'
      });

      this.reservedRef.current.classList.remove(
        'afterSubmit-invisible',
        'validSubmit'
      );
      this.reservedRef.current.classList.add(
        'afterSubmit-visible',
        'invalidSubmit'
      );
      setTimeout(() => {
        this.reservedRef.current.classList.remove('afterSubmit-visible');
        this.reservedRef.current.classList.add('afterSubmit-invisible');
      }, 2000);
    } else {
      // Fetch seat document in order to get proper '_id' field of it and use it as 'seat_id'
      // key in reservation POST req
      const seat = await fetch(
        `https://mini-kino.herokuapp.com/api/seats/${this.state.choosenRow}/${this.state.choosenSeat}`,
        {
          method: 'GET'
        }
      );

      const parsedArr = await seat.json();

      await this.setState({
        ...this.state,
        seat_id: parsedArr[0]._id
      });

      const searchParams = new URLSearchParams();
      searchParams.append('user_id', this.state.user_id);
      searchParams.append('seat_id', this.state.seat_id);
      searchParams.append('screening_id', this.state.screening_id);

      const reservation = await fetch(
        `https://mini-kino.herokuapp.com/api/reservation/`,
        {
          method: 'POST',
          body: searchParams
        }
      );

      const resp = await reservation.text();
      console.log(resp);
      await this.setState({
        ...this.state,
        afterSubmitInfo: 'Zarezerwowano'
      });

      // Reservation has been made
      this.reservedRef.current.classList.remove(
        'afterSubmit-invisible',
        'invalidSubmit'
      );
      this.reservedRef.current.classList.add(
        'afterSubmit-visible',
        'validSubmit'
      );
      setTimeout(() => {
        this.reservedRef.current.classList.remove('afterSubmit-visible');
        this.reservedRef.current.classList.add('afterSubmit-invisible');
      }, 1000);

      //Checks recent reservations
      const reserv = await end.get(
        `/api/reservation/default/${this.state.screening_id}`
      );

      await this.setState({
        ...this.state,
        takenSeats: reserv.data.map(reserv => {
          return { row: reserv.seat_id.row, seat: reserv.seat_id.seatNumber };
        })
      });

      // Computes which seats are available in order to rerender app and presents it for a client
      this.calculateFreeSeats();

      const seats = this.state.rows[this.state.choosenRow - 1].seat;
      await this.setState({
        ...this.state,
        freeSeats: seats,
        choosenSeat: 'Wybierz miejsce'
      });

      console.log(this.state);
    }
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="buyTicket-wrapper">
          <label>
            Wybierz datę seansu:
            <select
              className="date-select"
              onChange={this.handleDateOptionChange}
            >
              <option>Data i godzina</option>
              {this.props.screenings[0] !== undefined ? (
                this.props.screenings.map((screening, index) => {
                  return (
                    <option key={index} value={screening._id}>
                      {new Date(screening.time).toLocaleString()}
                    </option>
                  );
                })
              ) : (
                <option>Brak dostępnych terminów.</option>
              )}
            </select>
          </label>
          <label>Sala: {this.state.room}</label>
          <label>
            Rząd:
            <select
              name="row"
              ref={this.rowRef}
              className="row-select"
              onChange={this.handleRowOptionChange}
            >
              <option value="Wybierz rząd">Wybierz rząd</option>
              {this.state.rows.map((rowNum, index) => {
                return (
                  <option key={index} value={rowNum.row}>
                    {rowNum.row}
                  </option>
                );
              })}
            </select>
          </label>
          <label>
            Miejsce:
            <select
              name="seat"
              ref={this.seatRef}
              className="seat-select"
              onChange={this.handleSeatOptionChange}
            >
              <option value="Wybierz miejsce">Wybierz miejsce</option>
              {this.state.freeSeats.map((free, index) => {
                return (
                  <option key={index} value={free}>
                    {free}
                  </option>
                );
              })}
            </select>
          </label>
          <button type="submit" className="submitBtn">
            KUP
          </button>
          <p
            className="afterSubmit afterSubmit-invisible"
            ref={this.reservedRef}
          >
            {this.state.afterSubmitInfo}
          </p>
        </div>
      </form>
    );
  }
}

export default AvailableDates;
