#!/usr/bin/env node

const express = require('express');
const app = express();

app.use((req, res, next) => {
   res.status(201).json({"message": 'done'});
});

module.exports = app;
// var amqp = require('amqplib/callback_api');
//
// amqp.connect('amqp://rabbitmq', function(err, conn) {
//     conn.createChannel(function(err, ch) {
//         var start = (Date.now() % 1000) / 1000;
//         var q = 'hello';
//
//         ch.assertQueue(q, {durable: false});
//         var i = 0;
//         var limit = 11000;
//         while(i < limit){
//             var msg = 'Hello World! ' + Math.random();
//             ch.sendToQueue(q, new Buffer(msg));
//             console.log(" [x] Sent %s", msg);
//             i++;
//         }
//
//         console.log('skonczone w czasie: ' + (((Date.now() % 1000) / 1000) - start));
//
//     });
//     setTimeout(function() { conn.close(); process.exit(0) }, 500);
// });