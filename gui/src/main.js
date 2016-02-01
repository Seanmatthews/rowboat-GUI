require('./styles/main.less');
//require('./vendor/eventemitter2.min');
//require('./vendor/roslib.min');

const Application = require('./application');

ReactDOM.render(<Application />, document.getElementById('main'));

const hours = (new Date()).getHours(); 
if (0 && (hours < 7 || hours > 20)) {
  $('body').addClass('dark');
} else {
  $('body').addClass('light');
}

setTimeout(() => {
  $('body').addClass('animate');
});
