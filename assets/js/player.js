let heartbeatInterval;
let ws;
let artistNameDisplay;
let songNameDisplay;
let playing = false;

function onPlayButtonClick(event) {
    let button = $(event.target);
    let audio = $("#player-audio")[0]

    if(playing) {
        audio.pause();
        audio.load();
    } else {
        audio.play();
    }
    button.toggleClass("fa-play fa-pause");
    playing = !playing;
}

function updateArtistAndSong(data) {
    let artists = data.song.artists.map(a => a.name);
    let artistText = artists.join(", ");
    let songText = data.song.title;

    // Replace the text of the displays with the artist and song.
    // If the display is too long, chop off a letter, add dots, 
    // and repeat until the text fits within the player.
    do {
        artistNameDisplay.text(artistText);
        artistText = artistText.replace(/\.+$/, "").slice(0, -1) + "...";
    } while(artistNameDisplay.outerWidth() > 160)

    do {
        songNameDisplay.text(songText);
        songText = songText.replace(/\.+$/, "").slice(0, -1) + "...";
    } while(songNameDisplay.outerWidth() > 160)
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

    playButton.on("click", onPlayButtonClick);

    artistNameDisplay = $("#player-artist-name");
    songNameDisplay = $("#player-song-name");
    connect();
});