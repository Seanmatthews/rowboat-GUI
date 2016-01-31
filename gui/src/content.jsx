module.exports = "It works from content.js.";
var CommentBox = React.createClass({
  render: function() {
    return (
      <div className="commentBox">
      Hello, world! I am a CommentBox.
        </div>
    );
  }
});

React.renderComponent(<CommentBox />, document.body);
