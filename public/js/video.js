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
    muted: false,
    controls: true,
    children: {
        loadingSpinner: true
    }
});
