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

