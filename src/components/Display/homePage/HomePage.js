import React, { Component } from 'react';
import './HomePage.css';
import end from '../../../apis/index';
import Photo from './Photo';
import Footer from '../../Display/footer/Footer';

class HomePage extends Component {
  state = {
    photosPro: [],
    photosNew: []
  };

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
        <img className="jpg-home" src="img/jumanji2.jpg" alt="Home photo" />
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
