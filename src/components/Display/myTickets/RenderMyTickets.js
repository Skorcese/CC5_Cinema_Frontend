import React from 'react';
import './MyTickets.css';

function fullDescrAndTooltipText(refDescr, fullDescr, descr, refTooltip) {
  if (refDescr.current.innerText.length === 33) {
    refDescr.current.innerText = fullDescr;
    refTooltip.current.innerText = 'Zwiń opis';
  } else {
    refDescr.current.innerText = descr;
    refTooltip.current.innerText = 'Rozwiń opis';
  }
}

const RenderMyTickets = props => {
  const toRender = props.data.map(reservation => {
    const screening = reservation.screening_id;
    const seat = reservation.seat_id;
    let descr;
    let fullDescr = screening.movie_id.description;
    let refDescr = React.createRef();
    let refTooltip = React.createRef();
    if (screening.movie_id.description.length > 30) {
      descr = `${screening.movie_id.description.slice(0, 30)}...`;
    } else descr = screening.movie_id.description;

    return (
      <div className="tickets-wrapper" key={reservation._id}>
        <img
          className="moviePoster"
          src={`img/home/${screening.movie_id.imageUrl}`}
          alt={screening.movie_id.title + ' poster'}
        />
        <div className="utils">
          <h3 className="movieTitle">{screening.movie_id.title}</h3>
          <p
            className="description tooltip"
            onClick={() =>
              fullDescrAndTooltipText(refDescr, fullDescr, descr, refTooltip)
            }
          >
            <span>{'Opis: '}</span>
            <span className="descrSpan" ref={refDescr}>
              {descr}
            </span>
            <span className="tooltipText" ref={refTooltip}>
              {'Rozwiń opis'}
            </span>
          </p>
          <p className="screeningTime">
            <span>{'Godzina: '}</span> {screening.time}
          </p>
          <p className="seat">
            <span>{'Sala: '}</span>
            {seat.room_id.name}
            <span>{', Rząd: '}</span>
            {seat.row}
            <span>{', Miejsce: '}</span>
            {seat.seatNumber}
          </p>
        </div>
      </div>
    );
  });

  return toRender;
};

export default RenderMyTickets;
