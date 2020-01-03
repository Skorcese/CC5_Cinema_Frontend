import React from 'react';
import Display from '../Display/Display';
import './App.css';
import Footer from '../Display/footer/Footer'

class App extends React.Component {
  render() {
    return (
      <div>
        <div className="ui container">
          <Display />
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
