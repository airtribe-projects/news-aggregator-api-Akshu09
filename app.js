
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const userRoutes = require('./routes/userRoutes');



const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use('/', userRoutes);

app.get('/', (req, res) => {
    res.send('Welcome to the News Aggregator API');
});

// Import routes
const newsRoutes = require('./routes/newsRoutes');
// console.log(newsRoutes);

// Use routes
app.use(newsRoutes);  

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

module.exports = app;

