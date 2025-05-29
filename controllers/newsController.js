// controllers/newsController.js

const fetch = require('node-fetch');

exports.getNews = async (req, res) => {
  try {
    const apiKey = process.env.NEWS_API_KEY;
    if (!apiKey) {
      return res.status(500).json({ message: 'News API key is not configured' });
    }

    const response = await fetch(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`);
    const data = await response.json();

    if (data.status !== 'ok') {
      return res.status(500).json({ message: 'Failed to fetch news from external API' });
    }

    res.status(200).json({ news: data.articles });
  } catch (error) {
    res.status(500).json({ message: 'Error fetching news', error: error.message });
  }
};
