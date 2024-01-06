function getAutoplay() {
    autoplay = localStorage.getItem('autoplay')
    if(autoplay == null) {
        autoplay = 0
        localStorage.setItem('autoplay', autoplay)
    }

    return autoplay
}

function updateButton() { 
    button = $("#bg-music-button")
    autoplay = getAutoplay()

    if(autoplay == 0) {
        button.css('text-decoration', 'line-through')
    } else {
        button.css('text-decoration', 'none')
    }
}

$("#bg-music-button").click(function(event) {
    button = $(event.target)
    autoplay = getAutoplay()

    if(autoplay == 0) {
        localStorage.setItem('autoplay', 1)
    } else {
        localStorage.setItem('autoplay', 0)
    }

    updateButton()
})

audioWithAutoplay = '<audio volume="0.5" controls autoplay><source src="https://listen.moe/fallback" type="audio/mpeg"></audio>'
audioWithoutAutoplay = '<audio volume="0.5" controls><source src="https://listen.moe/fallback" type="audio/mpeg"></audio>'

updateButton()
autoplay = getAutoplay()
frame = $('#bg-music-frame')

if(autoplay == 0) {
    frame.html(audioWithoutAutoplay)
} else {
    frame.html(audioWithAutoplay)
}