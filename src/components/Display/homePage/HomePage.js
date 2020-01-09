import React, { Component } from 'react';
import './HomePage.css';
import end from '../../../apis/index';
import Photo from './Photo';
import { movies } from './movies';

class HomePage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      photosPro: [],
      photosNew: []
    };

    this.addFilms();
  }

  async addFilms() {
    var getMovies = await end.get('api/movies');
    console.log(getMovies);
    if (
      getMovies.data.length === 0 ||
      getMovies.data.length === null ||
      getMovies.data.length === undefined
    )
      movies.map(v => end.post('api/movies', v));
  }

  async componentDidMount() {
    const photos = await end.get('api/movies');
    this.setState({
      photosPro: photos.data.slice(0, 6),
      photosNew: photos.data.slice(7, 13)
    });

    console.log(photos.data);
  }

  render() {
    return (
      <div>
        <img
          className="jpg-home"
          src="/mini-kino/img/jumanji2.jpg"
          alt="Home photo"
        />
        <br />
        <br />
        <hr />
        <br />
        <div className="text-home">POLECANE FILMY</div>
        <br />
        <br />
        <div className="photo-home">
          {this.state.photosPro.map((value, index) => {
            return (
              <Photo
                key={index}
                imageUrl={value.imageUrl}
                title={value.title}
                _id={value._id}
              />
            );
          })}
        </div>
        <br />
        <br />
        <br />
        <br />
        <hr />
        <br />
        <div className="text-home">NOWE FILMY</div>
        <br />
        <br />
        <div className="photo-home">
          {this.state.photosNew.map((value, index) => {
            return (
              <Photo
                key={index}
                imageUrl={value.imageUrl}
                title={value.title}
                _id={value._id}
              />
            );
          })}
        </div>
        <br />
        <br />
        <br />
        <br />
      </div>
    );
  }
}

export default HomePage;
