import React, { Component } from 'react';
import logo from './logo.svg';
import './style.css';

// TODO: more elegant / maintainable static file serving
import bredtoes from './images/Bred Toes.jpg';
import ryanpic from './images/ryanpic.jpg';

// SPA router (react-router)
import { BrowserRouter as Router, Route, Link, Switch, Redirect } from "react-router-dom";

// For transitions
import { TransitionGroup, CSSTransition } from "react-transition-group";

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
            <div id="rc-about"
                className = "page">
                <img src={ryanpic}  alt=""/>
            </div>
            // <div id="rc-about" 
            //     className="page"
            //     style = {{ backgroundImage: ryanpic }} >
            // </div>
        );
    };
    


}

class Homepage extends Component{
    render() {
        return (
            <div id="rc-homepage"
                className = "page">
                <img src={bredtoes}  alt=""/>
            </div>
            // <div id="rc-homepage" 
            //     className="page"
            //     style = {{ backgroundImage: bredtoes }} >
            // </div>
        );

    };


};

class NavFloat extends Component {

    render() {
        return (
            <div id="rc-logo" className="page" style={{zIndex: 1}}>
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

class App extends Component {
  render() {
    return (
        <Router>
            <div>
                <Route render = {({location}) => (
                    <TransitionGroup>
                        <NavFloat />
                        <CSSTransition
                            key = {location.key}
                            timeout={1000}
                            classNames="fade"
                        >
                            <div>
                                <Switch location = {location}>
                                    <Route exact path="/" component={Homepage} />
                                    <Route path="/about" component={AboutMe} />
                                </Switch>
                            </div>
                        </CSSTransition>
                    </TransitionGroup>
                )} />
            </div>
        </Router>
    );
  }
}

export default App;
