const express = require('express');
const cors = require('cors');
const bodyParser = require ('body-parser');
const app = express();

app.set('port', process.env.PORT || 4000);

app.use(cors({origin: true}));
app.use(express.json());
app.use(bodyParser.urlencoded({extended: false}))

app.use('/movies', require('./routes/movies'))
app.use('/clasifications', require('./routes/clasifications'))

module.exports = app;