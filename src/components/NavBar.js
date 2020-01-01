import React from 'react';

class NavBar extends React.Component{

    render(){
        return(
            <div className="ui top inverted menu">
                <div>
                    <div className="ui item" style={{ color: 'white' }}>
                        <i className="fast backward icon"></i>
                        <i className="video icon"></i>
                        <i className="fast forward icon"></i>
                    </div>
                    {/* <button>Home</button>
                    <button>Cennik</button>
                    <button>Moje bilety</button>
                    <button>Kontakt</button>
                    <button>Rejestracja</button>
                    <button>Login</button> */}
                </div>
            </div>
        )
    }
}

export default NavBar;