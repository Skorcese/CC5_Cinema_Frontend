import React from 'react';

import NavBar from './NavBar';
import Display from './Display';

const App = () => {
    return(
        <div>
            <NavBar />
            <div className="ui container">
                <Display />
            </div>
        </div>
    )
}

export default App;