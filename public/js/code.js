console.log('Worker loaded');

socket.on('video-msg', function(msg){
    console.log('msg - ', msg);

    if (msg == 'loading') {
        $.deck('go', 'video-slide');
    }

    else if (msg == 'play') {
        console.log('Going to the code window');
        $.deck('go', 'video-slide');
    }

});

socket.on('video-jump', function(seconds){
    $('#video-slide').find('video').each(function() {
        var myPlayer = _V_(this);
        myPlayer.currentTime(seconds);
    });
});
