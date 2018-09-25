import React, { Component } from 'react';
import { getData } from './Data';

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

    componentWillUnmount= () => {
        this.isCancelled = true;
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
            !this.isCancelled && this.setState({
                articles: articles
            })
        })
    }

    render() {
        return (
            <div className='container'>
                <div className='row'>
                    {this.state.articles.map((news, i) => {
                        return (
                            <div className='col-lg-6' key={i}>
                                <div className="card" style={{ width: '30rem' }}>
                                    {news.urlToImage ? <img className='card-img-top' style={{ height: '300px' }} src={news.urlToImage} alt="No image" /> : null}
                                    <div className="card-body">
                                        <h5 className='card-title'>
                                            {news.title}
                                        </h5>
                                        <h6 className="card-subtitle mb-2 text-muted">
                                            <p>
                                                <i>{news.author ? news.author : this.props.default}</i>
                                            </p>
                                            <p>{this.formatDate(news.publishedAt)}</p>
                                        </h6>
                                        <p className='card-text'>{
                                            news.description
                                            }</p>
                                        <a href={news.url} target='_blank' className="btn btn-primary">Przejdź do artykułu</a>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        );
    }
}


