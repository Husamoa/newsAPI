import React, { Component } from 'react';
import { getArticles } from './server';

export default class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: []
        }
    }

    componentWillMount = () => {
      this.getData()

    }
    
    componentWillReceiveProps(nextProps) {
        if (nextProps !== this.props) {
          this.setState({ value: nextProps.default });
          this.getData();
        }
      }

    getData = () => {
        getArticles().then(res => {
            this.setState({
                data: res.articles
            })
        })
    }

    render() {
        return (
            <div>
                <h1>News API Challenge</h1>
                <ul className='list-group'>
                {this.state.data.map((article, i) => {
                    return <li className='list-group-item' key={i}>{article.title}</li>
                })}
                </ul>
            </div>

        );
    }
}