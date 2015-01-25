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
        $.deck('go', 'canadarm-slide');
        socket.emit('video-msg', 'loading');
    }

    /**
     * W
     */
    if (e.keyCode == 87) {
        console.log('W - Playing Canadarm video');
        $('#canadarm-slide').find('video').each(function() {
            var myPlayer = _V_(this);
            myPlayer.play();
            socket.emit('video-msg', 'playing');
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

