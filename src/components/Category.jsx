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
                        <label className="input-group-text">Wybierz kategorię</label>
                    </div>
                    <select value={this.state.value} onChange={this.handleChange} className="custom-select" id="inputGroupSelect01">
                        <option value='technology'>Technologia</option>
                        <option value='business'>Biznes</option>
                        <option value='entertainment'>Rozrywka</option>
                        <option value='health'>Zdrowie</option>
                        <option value='science'>Nauka</option>
                        <option value='sports'>Sport</option>
                    </select>
                </div>
                <Articles default={this.state.value} />
            </Fragment>
        );
    }
}
