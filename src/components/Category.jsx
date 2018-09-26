import React, { Component, Fragment } from 'react';
import { getData } from './Data';
import Articles from './Articles';

export default class Category extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            value: this.props.default
        };
        this.handleChange = this.handleChange.bind(this);
    }


    handleChange = (e) => {
        this.setState({ value: e.target.value });
    }
    componentWillMount = () => {
        this.setState({
            value: this.state.value
        })
        // console.log('aaaaa', this.state.value) // check this.state.value  
        getData(this.state.value)

    }

    render() {
        return (
            <Fragment>
                <div className="input-group mb-3">
                    <div className="input-group-prepend">
                        <label className="input-group-text">Select category</label>
                    </div>
                    <select value={this.state.value} onChange={this.handleChange} className="custom-select" id="inputGroupSelect01">
                        <option value='technology'>Technology</option>
                        <option value='business'>Business</option>
                        <option value='entertainment'>Entertainment</option>
                        <option value='health'>Health</option>
                        <option value='science'>Science</option>
                        <option value='sports'>Sports</option>
                    </select>
                </div>
                <Articles default={this.state.value} />
            </Fragment>
        );
    }
}
