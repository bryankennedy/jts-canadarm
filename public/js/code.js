console.log('Worker loaded');

socket.on('video-msg', function(msg){
    console.log('msg - ', msg);

    if (msg == 'play') {
        console.log('Going to the code window');
        $.deck('go', 'code-slide');
    }

});

//socket.on('video-jump', function(seconds){
    //$('#video-slide').find('video').each(function() {
        //var myPlayer = _V_(this);
        //myPlayer.currentTime(seconds);
    //});
//});
