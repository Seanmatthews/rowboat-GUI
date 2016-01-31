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

// Publishing a Topic
// ------------------

var cmdVel = new ROSLIB.Topic({
  ros : ros,
  name : '/ui',
  messageType : 'std_msgs/String'
});

function sendMessage(msg) {
  console.log('sending message: ' + msg);
  cmdVel.publish(new ROSLIB.Message({
    data: msg
  }));
}

// Subscribing to a Topic
// ----------------------

var listener = new ROSLIB.Topic({
  ros : ros,
  name : '/chatter',
  messageType : 'std_msgs/String'
});

var output = document.getElementById('output');
listener.subscribe(function(message) {
  output.textContent = message.data;
  //console.log('Received message on ' + listener.name + ': ' + message.data);
  //listener.unsubscribe();
});

jQuery('#button').click(function(e) {
  e.preventDefault();
  var val = $(this).attr('value');
  console.log('val', val);
  if ( val.trim() === 'Stop' ) {
    $(this).attr('value', 'Start');
    sendMessage('stop');
  } else {
    $(this).attr('value', 'Stop');
    sendMessage('start');
  }
});
