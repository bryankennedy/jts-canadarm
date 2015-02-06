/**
 * Listen for socket messages coming from the server
 */
socket.on('video-msg', function(msg){
    console.log('msg - ', msg);

    // Plat the video on the manager system
    $('#video-slide').find('video').each(function() {
        console.log('Playing the video');
        var myPlayer = _V_(this);
        myPlayer.play();
    });
});

/**
 * Listen for keystrokes
 *
 * A contact closure is triggered by the show control device.
 * The contact closure causes the keyboard enclousre to submit a keystroke.
 * We use this as the signal to load/start the video.
 *
 **/
$(document).keydown(function(e){

    /**
     * Q
     */
    if (e.keyCode == 81) {
        console.log('Q - Loading paused Canadarm video');
        $.deck('go', 'video-slide');
        socket.emit('video-msg', 'loading');
    }

    /**
     * W
     */
    if (e.keyCode == 87) {
        console.log('W - Playing Canadarm video');
        socket.emit('video-msg', 'play');
        $('#video-slide').find('video').each(function() {
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

    var seconds;

    /**
     * A
     */
    if (e.keyCode == 65) {
        console.log('A pressed');
        seconds = 148;
        socket.emit('video-jump', seconds);
        // Jump to a specific time
        $('#video-slide').find('video').each(function() {
            var myPlayer = _V_(this);
            myPlayer.currentTime(seconds);
        });
    }

    /**
     * S
     */
    if (e.keyCode == 83) {
        console.log('D pressed');
        seconds = 177;
        socket.emit('video-jump', seconds);
        // Jump to a specific time
        $('#video-slide').find('video').each(function() {
            var myPlayer = _V_(this);
            myPlayer.currentTime(seconds);
        });
    }

    /**
     * D
     */
    if (e.keyCode == 68) {
        console.log('D pressed');
        seconds = 0;
        socket.emit('video-jump', seconds);
        // Jump to a specific time
        $('#video-slide').find('video').each(function() {
            var myPlayer = _V_(this);
            myPlayer.currentTime(seconds);
        });
    }

    /**
     * ?
     */
    if (e.shiftKey && e.keyCode == 191) {
        console.log('? pressed');
        $.deck('go', 'start-slide');
    }

});

