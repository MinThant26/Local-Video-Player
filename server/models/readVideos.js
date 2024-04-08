const path = require('path');
const fs = require('fs');

const videoFolder = path.join(__dirname, '../videos');
    
function readVideo(res){
    fs.readdir(videoFolder, (err, files) => {
        if (err) {
            console.error('Error reading video folder:', err);
            return res.status(500).send('Internal Server Error');
        }
    
        const videoFiles = files.filter(file => file.endsWith('.mp4'));
    
        return res.send({videos: videoFiles});
    });
}

module.exports = readVideo;