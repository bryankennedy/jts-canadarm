// Load Express, the Node JS web framework
var express = require('express');
var app = express();

// Load a web server for the video pages
var http = require('http').Server(app);

// Load utilities for file paths
var path = require('path');
var io = require('socket.io')(http);

// Serve files from the public directory
app.use(express.static(path.join(__dirname, 'public')));

app.get('/chat', function(req, res){
    res.sendFile(__dirname + '/public/00-chat-test.html');
});

app.get('/', function(req, res){
    res.sendFile(__dirname + '/public/01-laptop-canadarm.html');
});

io.on('connection', function(socket) {
    socket.on('chat message', function(msg) {
        console.log('msg - ', msg);
    });

    console.log('A computer connected');

    socket.on('disconnect', function() {
        console.log('User disconnected');
    });
});

io.on('connection', function(socket){
    // Chat message
    socket.on('chat message', function(msg){
        io.emit('chat message', msg);
    });

    // Video play
    socket.on('video play', function(msg){
        console.log('video play', msg);
        //io.emit('chat message', msg);
    });
});

http.listen(3000, function(){
    console.log('listening on *:3000');
});
