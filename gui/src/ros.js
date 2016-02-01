'use strict';

//const ROSLIB = require('ros');

const ROS = new ROSLIB.Ros({
  url : 'ws://localhost:9090'
});

ROS.on('connection', function() {
  console.log('Connected to websocket server.');
});

ROS.on('error', function(error) {
  console.log('Error connecting to websocket server: ', error);
});

ROS.on('close', function() {
  console.log('Connection to websocket server closed.');
});

const subscribe = function(topic, callback) {
  const listener = new ROSLIB.Topic({
    ros : ROS,
    name: topic.name,
    messageType: topic.messageType
  });

  listener.subscribe(function(message) {
    callback(message);
  });
}

module.exports = ROS;
module.exports.subscribe = subscribe;
