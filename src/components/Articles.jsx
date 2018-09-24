import React, { Component } from 'react';
import { getData } from './server';

export default class Articles extends Component {
    constructor(props) {
        super(props)
        this.state = {
            articles: []
        }
    };

    componentWillMount = () => {
        this.getArticles();
    }

    formatDate(date) {
        var time = new Date(date);
        var year = time.getFullYear();
        var day = time.getDate();
        var hour = time.getHours();
        var minute = time.getMinutes();
        var month = time.getMonth() + 1;
        var composedTime =
            day +
            '/' +
            month +
            '/' +
            year +
            ' | ' +
            hour +
            ':' +
            (minute < 10 ? '0' + minute : minute);
        return composedTime;
    }

    getArticles = () => {
        getData().then(res => {
            const articles = res.articles
            console.log(articles)
            this.setState({
                articles: articles
            })
        })
    }

    render() {
        return (
            <div className="cardsContainer">
                {this.state.articles.map((news, i) => {
                    return (
                        <div className="card" key={i}>
                            <div className="content">
                                <h3>
                                    <a href={news.url} target="_blank">
                                        {news.title}
                                    </a>
                                </h3>
                                <p>{news.description}</p>
                                <div className="author">
                                    <p>
                                        By <i>{news.author ? news.author : this.props.default}</i>
                                    </p>
                                    <p>{this.formatDate(news.publishedAt)}</p>
                                </div>
                            </div>
                            <div className="image">
                                <img src={news.urlToImage} alt="" />
                            </div>
                        </div>
                    );
                })}
            </div>
        );
    }
}


