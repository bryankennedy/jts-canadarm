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
        console.log('Q - Loading paused Object Theater video.');
        $.deck('go', 'earthmobile-slide')
    }

    /**
     * W
     */
    if (e.keyCode == 87) {
        console.log('W - Playing Object Theater video.');
        $('#earthmobile-slide').find('video').each(function() {
            var myPlayer = _V_(this);
            myPlayer.play();
        });
    }

    /**
     * E
     */
    if (e.keyCode == 69) {
        console.log('E pressed');
        $.deck('go', 'black-slide')
    }

    /**
     * Z
     */
    if (e.keyCode == 90) {
        console.log('Z pressed');
        $.deck('go', 'earthmobile-interlude');
    }

    /**
     * X
     */
    if (e.keyCode == 88) {
        console.log('X pressed');
        $.deck('go', 'eating-water-interlude');
    }

    /**
     * C
     */
    if (e.keyCode == 67) {
        console.log('C pressed');
        $.deck('go', 'acidifying-oceans-interlude');
    }

    /**
     * V
     */
    if (e.keyCode == 86) {
        console.log('V pressed');
        $.deck('go', 'hot-air-interlude');
    }

    /**
     * B
     */
    if (e.keyCode == 66) {
        console.log('B pressed');
        $.deck('go', 'human-era-interlude');
    }
});
