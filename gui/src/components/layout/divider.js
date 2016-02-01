'use strict';
const React = require('react');
const ReactDOM = require('react-dom');
const $ = require('jquery');

let Divider = React.createClass({
  render: function() {
    return (
      <div className="divider" onMouseDown={this.props.handleMouseDown}>
        <div className="thumb"></div>
      </div>
    );
  }
});

module.exports = Divider;
