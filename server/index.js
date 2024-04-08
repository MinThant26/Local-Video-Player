const express = require('express');
const path = require('path');

const server = express();
const PORT = 3000;

const videosRoute = require('./routes/videosRoute');
const publicPath = path.join(__dirname, '../public');

server.use(express.static(publicPath));

server.use('/videos', videosRoute);

server.listen(PORT, () => {
    console.log(`Listening at http://localhost:${PORT}`)
})