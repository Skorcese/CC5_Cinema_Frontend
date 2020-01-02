import React from 'react';
import './MyTickets.css';

const RenderMyTickets = props => {
  //   console.log(props);
  const toRender = props.data.map(reservation => {
    return (
      <div className="myTickets-wrapper" key={reservation._id}>
        <img
          className="moviePoster"
          src={reservation.Screening_id.Movie_id.ImageUrl}
          alt={reservation.Screening_id.Movie_id.Title + ' poster'}
        />
        <div>
          <h3 className="movieTitle">
            {reservation.Screening_id.Movie_id.Title}
          </h3>
          <p className="screeningTime">{reservation.Screening_id.Time}</p>
          <p className="seat">
            {'Sala: ' +
              reservation.Seat_id.Room_id.Name +
              ', Rząd: ' +
              reservation.Seat_id.Row +
              ', Miejsce: ' +
              reservation.Seat_id.SeatNumber}
          </p>
        </div>
      </div>
    );
  });

  return toRender;
};

export default RenderMyTickets;
