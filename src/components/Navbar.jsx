import React, { Component } from 'react';

export default class Navbar extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top">
            <a className="navbar-brand" href="#">News API in Poland</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
          
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav mr-auto">
                <li className="nav-item active">
                  <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="https://github.com/Husamoa/newsAPI" target='_blank'>Documentation</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="https://newsapi.org/">Get News API</a>
                </li>
              </ul>
            </div>
          </nav>
        )
    }
}
