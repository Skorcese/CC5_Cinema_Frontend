import React from 'react';
import './PriceList.css';

const PriceList = () => {
  return (
    <div className="price-content">
    <br/>
    <h1>Ceny biletów</h1>
    <br/>
    <br/>
    <hr /><br />
    <div className="text-home">FILMY 2D</div><br />
    <div className="prince-2d">
      <div>    </div>
      <div>Poniedziałek</div>
      <div>Wtorek-Piątek</div>
      <div>Weekend</div>

      <div>Bilet normalny</div>
      <div>15 zł</div>
      <div>21 zł</div>
      <div>25 zł</div>

      <div>Dziecięcy/Studencki</div>
      <div>10 zł</div>
      <div>16 zł</div>
      <div>16 zł</div>

      <div>Seniorzy</div>
      <div>12 zł</div>
      <div>17 zł</div>
      <div>18 zł</div>
    
    </div>
    <br /><br /><br />
    <hr /><br />
    <div className="text-home">FILMY 3D</div><br />
    <div className="prince-2d">
    <div>    </div>
    <div>Poniedziałek</div>
    <div>Wtorek-Piątek</div>
    <div>Weekend</div>

    <div>Bilet normalny</div>
    <div>25 xł</div>
    <div>28 zł</div>
    <div>30 zł</div>

    <div>Dziecięcy/Studencki</div>
    <div>18 zł</div>
    <div>20 zł</div>
    <div>22 zł</div>

    <div>Seniorzy</div>
    <div>20 zł</div>
    <div>22 zł</div>
    <div>26 zł</div>
    
    </div> <br /><br />
    </div>);
};

export default PriceList;
