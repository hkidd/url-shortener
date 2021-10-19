const express = require('express');
const mongoose = require('mongoose');
const ShortUrl = require('./models/shortUrl');
const app = express();

mongoose.connect('mongodb://localhost/urlShortener', {
    useUnifiedTopology: true
});

app.set('view engine', 'ejs');
app.use(express.urlencoded({extended: true}));

app.get('/', async (req, res) => {
    const shortUrls = await ShortUrl.find()
    res.render('index', { shortUrls: shortUrls })
});

app.post('/shortUrls', async (req, res) => {
    await ShortUrl.create({ full: req.body.fullURL })

    res.redirect('/')
});

app.listen(process.env.PORT || 5000);