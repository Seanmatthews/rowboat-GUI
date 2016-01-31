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
  name : '/joy',
  messageType : 'sensor_msgs/Joy'
});

var output = $('#joystick');
listener.subscribe(function(message) {
  output.html(JSON.stringify(message));
  //console.log('message', message);
  //debugger;
});


/*
alert('1');
  var listener = new ROSLIB.Topic({
    ros : ros,
    name : '/listener',
    messageType : 'std_msgs/String'
  });

  listener.subscribe(function(message) {
    console.log('Received message on ' + listener.name + ': ' + message.data);
    listener.unsubscribe();
  });
  */
