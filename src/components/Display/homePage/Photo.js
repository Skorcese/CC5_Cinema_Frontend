import React from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css';

function reservation(props) {
  const movie = props._id;
  window.localStorage.setItem('movieId', movie);
}

const Photo = props => {

  return (
    <div>
      <Link
        to="/reservation"
        className="ui card"
        onClick={() => reservation(props)}
      >
        <div className="ui slide masked reveal image ins-img">
          <img
            className="ui medium circular image "
<<<<<<< HEAD
            src={'/mini-kino/img/home/' + props.imageUrl}
=======
            src={process.env.PUBLIC_URL +'/img/home/' + props.imageUrl}
>>>>>>> 26cb950340bd3bfdb9a28a0ba6d67338f76eb52b
            alt="Home photo"
          />
        </div>
        <div className="content" data-movie-id={props._id}>
          <a className="header">{props.title}</a>
        </div>
      </Link>
    </div>
  );
};

export default Photo;
