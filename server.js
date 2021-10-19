const express = require('express');
const app = express();

app.set('view engine', 'ejs');

app.listen(process.env.PORT || 5000);

app.get('/', function (req, res) {
    res.render('index')
})