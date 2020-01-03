import React from 'react';
import './HomePage.css'

const Photo = (props) => {
    return (
        <div>
            <div className="ui card">
            <div className="ui slide masked reveal image ins-img">
            <img className="ui medium circular image " src={'img/home/'+props.imageUrl} alt='Home photo'/>
             </div>
            <div className="content">
                <a className="header">{props.title}</a>
            </div>
            </div>

        </div>
    )
}

export default Photo;