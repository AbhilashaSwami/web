const express = require('express');
const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);
const path = require('path');

//var app=require('express')();
// var http=require('http').Server(app);
// var io=require('socket.io')(http);


// socket.on("Update Producer");

app.use(express.static(path.join(__dirname, '..', '..', 'client', 'build')));

//const server = http.createServer(app);
//io(server);
io.on('connection', function(socket){
socket.on('sending',function(data,callback)
    {
        console.log(data.passFrequency);
        console.log(data.processingDelay);
        console.log(data.Max_Threshold);
        console.log(data.Min_Threshold);
        console.log(data.Min_Instances);

        
    });
});

http.listen(9080, () => {
	console.log('Express server started');
});
