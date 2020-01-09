import React from 'react';
import './HomePage.css';

function reservation(props) {
  // const path = props.title.split(' ').join('').toLowerCase();
  const movie = props._id;
  window.localStorage.setItem('movieId', movie);
  window.location.href = `reservation/`;
}

const Photo = props => {
  return (
    <div>
      <div className="ui card">
        <div className="ui slide masked reveal image ins-img">
          <img
            className="ui medium circular image "
            src={'img/home/' + props.imageUrl}
            alt="Home photo"
          />
        </div>
        <div
          className="content"
          data-movie-id={props._id}
          onClick={() => reservation(props)}
        >
          <a className="header">{props.title}</a>
        </div>
      </div>
    </div>
  );
};

export default Photo;
