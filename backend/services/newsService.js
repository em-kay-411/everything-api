const axios = require('axios');

const getEverything = async (req, res) => {
    const apiKey = process.env.NEWS_API_KEY;
    const q = req.query.q;
    const sources = req.query.sources;
    const from = req.query.from;
    const to = req.query.to;
    const language = req.query.language;

    const response = await axios.get(`https://newsapi.org/v2/everything?q=${q ? `q=${q}` : ''}${sources ? `&sources=${sources}` : ''}${from ? `&from=${from}` : ''}${to ? `&to=${to}` : ''}${language ? `&language=${language}` : ''}&apiKey=${apiKey}`);
    res.status(response.status).send({response : response.data});
}

const getTopHeadlines = async(req, res) => {
    const apiKey = process.env.NEWS_API_KEY;
    const q = req.query.q;
    const country = req.query.country;
    const category = req.query.category;

    // console.log(`https://newsapi.org/v2/top-headlines?${country ? `country=${country}` : ''}${category ? `&category=${category}` : ''}${q ? `&q=${q}` : ''}&apiKey=${apiKey}`)

    const response = await axios.get(`https://newsapi.org/v2/top-headlines?${country ? `country=${country}` : ''}${category ? `&category=${category}` : ''}${q ? `q=&${q}` : ''}&apiKey=${apiKey}`)
    res.status(response.status).send({response : response.data});
}

module.exports = {
    getEverything,
    getTopHeadlines
};