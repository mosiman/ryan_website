import React, { Component } from 'react';
import logo from './logo.svg';
import './style.css';

// TODO: more elegant / maintainable static file serving
import bredtoes from './images/Bred Toes.jpg';

// importing fontawesome icons
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCamera, faUser } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';

library.add(fab, faCamera, faUser);

const instaLinkStyle = {
    color: "white",
    textDecorationLine: "none"
};


class RCBackground extends Component{


    render() {
        return (
            <div id="rc-bg"
                style = {{ backgroundImage: bredtoes }} >
                <NavFloat />

            </div>

        );

    };


};

class NavFloat extends Component {

    render() {
        return (
            <div id="rc-logo">
                Ryan Chan
                <div id="navlinks">
                    <ul>
                        <FontAwesomeIcon icon="user" />
                        <span className="navtext">
                            {'  '} about me
                        </span>
                    </ul>
                    <ul>
                        <FontAwesomeIcon icon="camera" />
                        <span className="navtext">
                            {'  '}check out more photos
                        </span>
                    </ul>
                    <ul>
                        <FontAwesomeIcon icon={['fab', 'instagram']} />
                        <span className="navtext">
                            <a href="http://google.ca" style={instaLinkStyle}> {'  '}bowlglet</a>
                        </span>
                    </ul>

                </div>
            </div>

        );
    }
}

// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <p>
//             Edit <code>src/App.js</code> and save to reload.
//           </p>
//           <a
//             className="App-link"
//             href="https://reactjs.org"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             Learn React
//           </a>
//         </header>
//       </div>
//     );
//   }
// }
class App extends Component {
  render() {
    return (
        <RCBackground />
    );
  }
}

export default App;
