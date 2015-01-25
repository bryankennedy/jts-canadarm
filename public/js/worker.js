console.log('Worker loaded');

socket.on('video-msg', function(msg){

    if (msg == 'loading') {
        $.deck('go', 'canadarm-slide');
    }

    else if (msg == 'playing') {
        $('#canadarm-slide').find('video').each(function() {
            var myPlayer = _V_(this);
            myPlayer.play();
        });
    }

});
