console.log('Worker loaded');

socket.on('video-msg', function(msg){
    console.log('msg - ', msg);

    if (msg == 'play') {
        console.log('Going to the code window');
        $.deck('go', 'code-slide');
    }

    if (msg == 'attract') {
        console.log('Going to the black slide');
        $.deck('go', 'black-slide');
    }

    if (msg == 'debug') {
        console.log('Going to the ID slides for debugging');
        $.deck('go', 'debug-slide');
    }

});
