window.onload = videoList;

function videoPlayer(name){
    const videoPlayer = document.querySelector('.videoPlayer');
    const videoTitle = document.querySelector('.videoTitle');

    videoTitle.textContent = name;
    videoPlayer.src = `/videos/${name}`;
};

function videoList(){
    fetch('/videos')
    .then(res => res.json())
    .then(data => {
        for(let i=0; i<data.videos.length; i++){
            createCard(data.videos[i]);
        }
    });

    function createCard(name){
        const container = document.querySelector('.videoList');

        const card = document.createElement('div');
        card.textContent = name;
        card.classList = 'card';

        card.onclick = () => {
            videoPlayer(name);
        }
    
        container.appendChild(card);
    };
};