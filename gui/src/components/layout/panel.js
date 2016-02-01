'use strict';
const React = require('react');
const classNames = require('classnames');

const Panel = React.createClass({
  render: function () {
    const classes = (this.props) ? this.props.className : '';
    let style = {};
    if (this.props.styleVal) {
      style[this.props.styleKey] = this.props.styleVal;
    }
    return (
      <div className={classNames(classes, 'panel')} style={style}>
      {this.props.children}
      </div>
    );
  }
});

module.exports = Panel;
