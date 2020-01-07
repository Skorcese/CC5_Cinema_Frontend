import React from 'react';

const ScreeningInfo = props => {
  if (props.seat !== undefined) {
    return (
      <div>
        <p className="screeningTime">
          <span>{'Godzina: '}</span>{' '}
          {new Date(props.screening.time).toLocaleString()}
        </p>
        <p className="seat">
          <span>{'Sala: '}</span>
          {props.seat.room_id.name}
          <span>{', Rząd: '}</span>
          {props.seat.row}
          <span>{', Miejsce: '}</span>
          {props.seat.seatNumber}
        </p>
      </div>
    );
  } else {
    return null;
  }
};

export default ScreeningInfo;
