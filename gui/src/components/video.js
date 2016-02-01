'use strict';
const React = require('react');
const classNames = require('classnames');

const Video = React.createClass({
  render: function() {
    const url = "http://localhost:8080/stream?topic=/videofile/camera/image_raw";
    return (
      <div className="video">
        <img src={url} alt="Stream" />
      </div>
    );
  }
});

module.exports = Video;
