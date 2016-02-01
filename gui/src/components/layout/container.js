'use strict';
const React = require('react');
const ReactDOM = require('react-dom');
const Panel = require('./panel');
const Divider = require('./divider');
const classNames = require('classnames');

const Container = React.createClass({
  getInitialState: function () {
    return {
      dragging: false,
      pos: {
        x: 0,
        y: 0
      },
      rel: null // position relative to the cursor
    }
  },
  handleMouseDown: function(e) {
    if (e.button === 0) {
      let pos = $(ReactDOM.findDOMNode(this)).offset();
      let height = $(ReactDOM.findDOMNode(this.refs['panel-1'])).height();
      const padding = 12 + 2;
      this.setState({
        dragging: true,
        rel: {
          x: e.pageX - pos.left,
          y: e.pageY - pos.top
        },
        val: {
          x: e.pageX - pos.left - padding,
          y: e.pageY - pos.top - padding
        }
      });
      e.stopPropagation();
      e.preventDefault();
      document.addEventListener('mousemove', this.onMouseMove);
      document.addEventListener('mouseup', this.onMouseUp);
    }
  },
  onMouseUp: function (e) {
    this.setState({dragging: false});
    e.stopPropagation();
    e.preventDefault();
    document.removeEventListener('mousemove', this.onMouseMove);
    document.removeEventListener('mouseup', this.onMouseUp);
  },
  onMouseMove: function (e) {
    if (this.state.dragging) {
      const x = e.pageX - this.state.rel.x;
      const y = e.pageY - this.state.rel.y;
      const padding = 12 + 2;
      this.setState({
        pos: {
          x: x,
          y: y
        },
        val: {
          x: this.state.rel.x + x - padding,
          y: this.state.rel.y + y - padding
        }
        
      })
      e.stopPropagation()
      e.preventDefault()
    }
  },
  render: function() {
    let dragged = (this.state.rel) ? 'dragged' : null;
    const classes = classNames('container', this.props.layout);
    let val;
    let key;
    if (this.state.val) {
      if (this.props.layout === 'horizontal') {
        val = this.state.val.y;
        key = 'height';
      } else {
        val = this.state.val.x;
        key = 'width';
      }
    }

    const panels = React.Children.toArray(this.props.children).map((child, i) => {
      const ref = `panel-${i}`;

      if (i === 0) {
        return (
            <Panel key={i} className={dragged} ref={ref} styleKey={key} styleVal={val}>
              {child}
            </Panel>
        );
      } else {
        return (
            <Panel key={i} ref={ref}>
              {child}
            </Panel>
        );
      }

    });

    if (panels.length > 1) {
      let i = 1;
      panels.splice(i,0, (<Divider key="divider" handleMouseDown={this.handleMouseDown} />));
    }
    return (
      <div key="controller-container" className={classes}>
        {panels}
      </div>
    );
  }
});

module.exports = Container;
