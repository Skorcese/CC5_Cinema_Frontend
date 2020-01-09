import React from 'react';
import '../myTickets/MyTickets.css';
import ScreeningInfo from '../util_components/ScreeningInfo';

function fullDescrAndTooltipText(refDescr, fullDescr, descr, refTooltip) {
  if (refDescr.current.innerText.length === 33) {
    refDescr.current.innerText = fullDescr;
    refTooltip.current.innerText = 'Zwiń opis';
  } else {
    refDescr.current.innerText = descr;
    refTooltip.current.innerText = 'Rozwiń opis';
  }
}

const RenderMovie = props => {
  const toRender = props.data.map(reservation => {
    let screening = {};
    let seat;
    let descr;
    let fullDescr;
    screening.movie_id = reservation.data;
    fullDescr = reservation.data.description;

    if (screening.movie_id.description.length > 30) {
      descr = `${screening.movie_id.description.slice(0, 30)}...`;
    } else descr = screening.movie_id.description;

    let refDescr = React.createRef();
    let refTooltip = React.createRef();

    return (
      <div
        className="tickets-wrapper"
        key={reservation._id || reservation.data._id}
      >
        <img
          className="moviePoster"
          src={`/mini-kino/img/home/${screening.movie_id.imageUrl}`}
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
          <ScreeningInfo seat={seat} screening={screening} />
        </div>
      </div>
    );
  });

  return toRender;
};

export default RenderMovie;
