const NewsAPI = require('newsapi');
const newsapi = new NewsAPI('5e6f525b531443ff92189f9e20db5504');

export const getArticles = () => {
     return newsapi.v2.topHeadlines({
        category: 'technology',
        language: 'pl',
        country: 'pl'
    }).then(res => {
        return res
    });    
}
