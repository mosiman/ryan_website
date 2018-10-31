import React, { Component } from 'react';
import logo from './logo.svg';
import './style.css';

// TODO: more elegant / maintainable static file serving
import bredtoes from './images/Bred Toes.jpg';
import ryanpic from './images/ryanpic.jpg';

// SPA router (react-router)
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

// importing fontawesome icons
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCamera, faUser } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
library.add(fab, faCamera, faUser);



const linkStyle = {
    color: "white",
    textDecorationLine: "none"
};

class AboutMe extends Component{

    render(){

        return (
            <div id="rc-about">
                <img src="images/ryanpic.jpg"  alt=""/>
            </div>
        );
    };
    


}

class Homepage extends Component{
    render() {
        return (
            <div id="rc-homepage"
                style = {{ backgroundImage: bredtoes }} >
            </div>
        );

    };


};

class NavFloat extends Component {

    render() {
        return (
            <div id="rc-logo">
                <Link to="/" style={linkStyle}> Ryan Chan </Link>
                <div id="navlinks">
                    <ul>
                        <FontAwesomeIcon icon="user" />
                        <span className="navtext">
                            {'  '} <Link to="/about" style={linkStyle}> about me </Link>
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
                            <a href="http://google.ca" style={linkStyle}> {'  '}bowlglet</a>
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
        <Router>
            <div>
            <NavFloat />

            <Route exact path="/" component={Homepage} />
            <Route path="/about" component={AboutMe} />
            </div>
        </Router>
    );
  }
}

export default App;
