var React = require('react');
var ReactDOM = require('react-dom');

//module.exports = "It works from content.js.";
var CommentBox = React.createClass({
  render: () => {
    return (
      <div className="commentBox">
        Hello, world! I am a CommentBox.
      </div>
    );
  }
});

ReactDOM.render(<CommentBox />, document.getElementById('main'));
