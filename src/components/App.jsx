import React, { Component, Fragment } from 'react';
import Navbar from './Navbar';
import Category from './Category';

export default class App extends Component {
    render() {
        return (
            <Fragment>
                <Navbar />
                <div className='container text-center'>
                    <Category default='technology' />
                </div>
            </Fragment>
        );
    }
}