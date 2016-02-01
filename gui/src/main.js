require('./styles/main.less');
//require('./vendor/eventemitter2.min');
//require('./vendor/roslib.min');

const Application = require('./application');

ReactDOM.render(<Application />, document.getElementById('main'));

const hours = (new Date()).getHours(); 
if (hours > 7 && hours < 24 ) {
  $('body').addClass('light');
} else {
  $('body').addClass('dark');
}

setTimeout(() => {
  $('body').addClass('animate');
});
