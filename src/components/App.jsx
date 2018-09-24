import React, { Component } from 'react';
import Navbar from './Navbar';
import Articles from './Articles';

export default class App extends Component {
    render() {
        return (
            <div>
                <Navbar />
                <Articles />
            </div>

        );
    }
}