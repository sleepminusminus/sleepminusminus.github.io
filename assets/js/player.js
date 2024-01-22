(() => {

const NAME_MAX_LENGTH = 150;
const SCROLL_DAMPENING = 2;

let audio;
let heartbeatInterval, ws;
let artistNameDisplay, songNameDisplay;
let root;
let playing = false;

function onPlayButtonClick(event) {
    let button = $(event.target);

    if(playing) {
        audio.pause();
        audio.load();
    } else {
        audio.play();
    }
    button.toggleClass("fa-play fa-pause");
    playing = !playing;
}

function onVolumeChange(event) {
    let value = $(event.target).val();
    audio.volume = value;
}

function updateArtistAndSong(data) {
    let artists = data.song.artists.map(a => a.name);
    let artistText = artists.join(", ");
    let songText = data.song.title;

    artistNameDisplay.text(artistText);
    songNameDisplay.text(songText);
    
    let artistScrollRaw = NAME_MAX_LENGTH - artistNameDisplay.prop("scrollWidth");
    let artistScroll = artistScrollRaw < 0 ? artistScrollRaw : 0;
    let artistScrollTime = Math.abs(SCROLL_DAMPENING * artistScroll / 100);

    let songScrollRaw = NAME_MAX_LENGTH - songNameDisplay.prop("scrollWidth");
    let songScroll = songScrollRaw < 0 ? songScrollRaw : 0;
    let songScrollTime = Math.abs(SCROLL_DAMPENING * songScroll / 100);

    root.style.setProperty("--artist-scroll", artistScroll + "px");
    root.style.setProperty("--artist-scroll-time", artistScrollTime + "s");
    root.style.setProperty("--song-scroll", songScroll + "px");
    root.style.setProperty("--song-scroll-time", songScrollTime + "s");
}

function _sendHeartbeat() {
    ws.send(JSON.stringify({op: 9}));
    console.log("Sent heartbeat, awaiting response...")
}

function heartbeat(interval) {
    heartbeatInterval = setInterval(_sendHeartbeat, interval);
}

function connect() {
    ws = new WebSocket("wss://listen.moe/gateway_v2");

    ws.onopen = () => {
        console.log("Socket opened!");
        clearInterval(heartbeatInterval);
        heartbeatInterval = null;
    }

    ws.onmessage = (message) => {
        if(!message.data.length) {
            console.log("No data received from websocket.");
            return;
        }

        let response;
        try {
            response = JSON.parse(message.data);
        } catch(error) {
            console.log("Failed to parse data: " + error.message);
        }

        switch(response.op) {
            case 0:
                _sendHeartbeat();
                heartbeat(response.d.heartbeat);
                break;
            case 1:
                if(
                    response.t !== "TRACK_UPDATE" &&
                    response.t !== "TRACK_UPDATE_REQUEST" &&
                    response.t !== "QUEUE_UPDATE" &&
                    response.t !== "NOTIFICATION"
                ) break;

                updateArtistAndSong(response.d);
                break;
            case 10:
                console.log("Response received!");
                break;
            default:
                break;
        }
    }
}

$(document).ready(() => {
    let playButton = $("#player-play-button i").addClass("fa-solid fa-play");
    let volumeSlider = $("#player-volume-slider");

    audio = $("#player-audio")[0]
    audio.volume = 0.5;

    playButton.on("click", onPlayButtonClick);
    volumeSlider.on("input", onVolumeChange);

    root = document.querySelector(":root")
    artistNameDisplay = $("#player-artist-name");
    songNameDisplay = $("#player-song-name");
    connect();
});

})();