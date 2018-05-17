#!/usr/bin/env node

// 'use strict';
//
// const express = require('express');
//
//
// // Constants
// const PORT = 8081;
// const HOST = '0.0.0.0';
//
// // App
// const app = express();
// app.get('/', (req, res) => {
//     res.send('Hello world\n');
// });
//
// app.listen(PORT, HOST);
// console.log(`Running on http://${HOST}:${PORT}`);

//-----------

const http = require('http');
// const port = 3000

onRequest = (req, res) => {
    console.log(req.getAll());
    console.log('cos sie dzieje! z: ' + req.url);
    res.end('pierwsza odpowiedz!');
};

http.createServer(onRequest).listen(8081);

console.log('starting...');


//-----------
// console.log('szafa gra!');
// const amqp = require('amqplib/callback_api');
//
// amqp.connect('amqp://rabbitmq', function(err, conn) {
//     conn.createChannel(function(err, ch) {
//         var q = 'helloNodeJs';
//
//         ch.assertQueue(q, {durable: false});
//         console.log(" [*] Waiting for messages in %s. To exit press CTRL+C", q);
//         ch.consume(q, function(msg) {
//             console.log(" [x] Received %s", msg.content.toString());
//         }, {noAck: true});
//     });
// });