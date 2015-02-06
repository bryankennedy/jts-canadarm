/**
 * Node setup
 */
// Load Express, the Node JS web framework
var express = require('express');
var app = express();

// Load a web server for the video pages
var http = require('http').Server(app);

// Load utilities for file paths
var path = require('path');
var io = require('socket.io')(http);


/**
 * UDP Settings
 *
 * Change this to the Brightsign manager
 *
 * Current valid messages are:
 *  - loading
 *  - playing
 */
var udpPort = 5000;
var udpHost = '127.0.0.1';
var dgram = require('dgram');
var udpServer = dgram.createSocket('udp4');

/**
 * Listen for UDP messages
 */
udpServer.on('listening', function () {
    var address = udpServer.address();
    console.log(
        'Listenting for UDP messages from ' +
        address.address + ':' +
        address.port
    );
});
udpServer.bind(udpPort);


/**
 * Routing
 */
// Serve files from the public directory
app.use(express.static(path.join(__dirname, 'public')));

app.get('/chat', function(req, res){
    res.sendFile(__dirname + '/public/00-chat-test.html');
});

app.get('/', function(req, res){
    res.sendFile(__dirname + '/public/selector.html');
});

app.get('/01', function(req, res){
    res.sendFile(__dirname + '/public/01-laptop-canadarm.html');
});

app.get('/02', function(req, res){
    res.sendFile(__dirname + '/public/02-monitor-canadarm.html');
});

app.get('/03', function(req, res){
    res.sendFile(__dirname + '/public/03-surface-canadarm-01.html');
});

app.get('/04', function(req, res){
    res.sendFile(__dirname + '/public/04-surface-canadarm-02.html');
});

app.get('/05', function(req, res){
    res.sendFile(__dirname + '/public/05-laptop-glovebox.html');
});

app.get('/06', function(req, res){
    res.sendFile(__dirname + '/public/06-laptop-code-01.html');
});

app.get('/07', function(req, res){
    res.sendFile(__dirname + '/public/07-laptop-code-02.html');
});

app.get('/99', function(req, res){
    res.sendFile(__dirname + '/public/99-captions.html');
});


/**
 * Pass message from UDP to the client using Socket.io
 */
io.on('connection', function(socket) {
    console.log('A browser connected to the local node server.');

    udpServer.on('message', function (message, remote) {
        console.log(remote.address + ':' + remote.port +' - ' + message);

        io.emit('video-msg', String(message));

    });

    //// Chat message
    //socket.on('chat message', function(msg) {
        //io.emit('chat message', msg);
        //console.log('msg - ', msg);
    //});

    //// Video message
    //socket.on('video-msg', function(msg){
        //console.log('Video message: ', msg);
        //// Send the message back out to the workers
        //io.emit('video-msg', msg);
    //});

    //// Video jump
    //socket.on('video-jump', function(seconds){
        //console.log('Video jump seconds: ', seconds);
        //// Send the message back out to the workers
        //io.emit('video-jump', seconds);
    //});

    socket.on('disconnect', function() {
        console.log('User disconnected');
    });
});


/**
 * Server
 *
 * Start the web server and listen on port 3000
 */
var port = 3000;
http.listen(port, function(){
    console.log('Listening on *:' + port);
});
