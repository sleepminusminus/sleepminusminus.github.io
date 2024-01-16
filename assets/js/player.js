playing = false;

$(document).ready(function() {
    playButton = $("#player-play-button i").addClass("fa-solid fa-play");

    playButton.click(function(event) {
        button = $(event.target);
        audio = $("#player-audio")[0]
        console.log(audio);
        if(playing) {
            audio.pause()
        } else {
            audio.play()
        }
        button.toggleClass("fa-play fa-pause");
        playing = !playing;
    });
});
