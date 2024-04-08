const express = require('express');
const readVideos = require('../models/readVideos');
const videoStream = require('../models/videoStream');

const router = express.Router();

router.get('/', (req,res) => {
    readVideos(res);
});
router.get('/:name', (req,res) => {
    videoStream(req,res);
})

module.exports = router;