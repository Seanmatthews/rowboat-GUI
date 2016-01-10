// Connecting to ROS
// -----------------

var ros = new ROSLIB.Ros({
  url : 'ws://localhost:9090'
});

ros.on('connection', function() {
  console.log('Connected to websocket server.');
});

ros.on('error', function(error) {
  console.log('Error connecting to websocket server: ', error);
});

ros.on('close', function() {
  console.log('Connection to websocket server closed.');
});

// Subscribing to a Topic
// ----------------------

var listener = new ROSLIB.Topic({
  ros : ros,
  name : '/listener',
  messageType : 'std_msgs/String'
});

listener.subscribe(function(message) {
  console.log('Received message on ' + listener.name + ': ' + message.data);
  listener.unsubscribe();
});

// Calling a service
// -----------------

// Getting and setting a param value
// ---------------------------------

ros.getParams(function(params) {
  //console.log(params);
});

var i = new ROSLIB.Topic({
  ros : ros,
  name : '/videofile/camera/image_raw'
})
var m;
var ImageData1;
i.subscribe(function(message) {
  m = message;
  console.log('the message', message);
  ImageData1="data:image/jpg;base64, "+message.data;
  displayImage = document.getElementById("img");
  displayImage.setAttribute('src', ImageData1);
  i.unsubscribe();

  /*
  var c = document.getElementById("canvas");
  var ctx = c.getContext("2d");
  ctx.fillStyle = "#FF0000";
  ctx.fillRect(0,0,150,75);
  */

});
