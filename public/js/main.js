var socket = io();

/**
 * Init the slide deck
 */
$(function() {
    $.deck('.slide');
});

/**
 * Video setup
 *
 * Mute any music
 * Any audio comes from the SOS.
 * This will help demonstrate any problems caused by switching on the amp.
 *
 * Disable the preloading spinner icon.
 * We don't want to show this to museum visitors while the video is loading.
 */
videojs('objth', {
    muted: true,
    children: {
        loadingSpinner: false
    }
});

/**
 * Listen for keystrokes
 *
 * Keystrokes are simulated by the automation system and AutoIt scripts
 * These can be found in the https://github.com/scimusmn/sos_autoit_scripts
 *
 **/
$(document).keydown(function(e){

    /**
     * Q
     */
    if (e.keyCode == 81) {
        console.log('Q - Loading paused Canadarm video');
        $.deck('go', 'canadarm-slide');
        socket.emit('video play', 'special message');
    }

    /**
     * W
     */
    if (e.keyCode == 87) {
        console.log('W - Playing Canadarm video');
        $('#canadarm-slide').find('video').each(function() {
            var myPlayer = _V_(this);
            myPlayer.play();
        });
    }

    /**
     * E
     */
    if (e.keyCode == 69) {
        console.log('E pressed');
        $.deck('go', 'black-slide');
    }

    /**
     * ?
     */
    if (e.shiftKey && e.keyCode == 191) {
        console.log('? pressed');
        $.deck('go', 'start-slide');
    }

});

$('form').submit(function() {
    socket.emit('chat message', $('#m').val());
    $('#m').val('');
    return false;
});
socket.on('chat message', function(msg) {
    $('#messages').append($('<li>').text(msg));
});

