import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Homepage extends Component {

  render() {
    return (
      <div className="container">
        <h1>Welcome to my personal page!</h1>
        <h3>This webapp was designed using React, Redux and Django!</h3>
        <h3>        </h3>
        <div className="">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link to="#" className="nav-link">About Me</Link>
            </li>
            <li className="nav-item">
              <Link to="#" className="nav-link">My Work</Link>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Homepage;