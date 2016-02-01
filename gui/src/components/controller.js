'use strict';
const React = require('react');
const classNames = require('classnames');

//const img = document.createElement('img');
//var img = document.createElement('img');
const xbox = require('../assets/xbox.svg');
//console.log(xbox);
const InlineSVG = require('svg-inline-react');  // CommonJS


const Controller = React.createClass({
  getInitialState: function() {
    return {
      data: {},
      control: 'visual'
    };
  },
  translateControllerData: function(data) {
    const buttons = {
      0: 'A',
      1: 'B',
      2: 'X',
      3: 'Y',
      4: 'LEFT BUMPER',
      5: 'RIGHT BUMPER',
      6: 'BACK',
      7: 'START'
    };
    const config = { };
    let flags = [];
    if (data.buttons) {
      flags = flags.concat(data.buttons.map((button, index) => {
        if (button) {
          return buttons[index];
        }
      //}));
      }).filter(flag => flag));
    }
    return flags;
  },
  componentWillMount: function() {
    this.props.ROS.subscribe({
      name: '/joy',
      messageType: 'sensor_msgs/Joy'
    }, function(data) {
      this.setState({ data: data });
    }.bind(this));
  },
  changeState: function(control) {
    this.setState({
      control: control
    });
  },
  render: function() {
    const control = 'visual';
    let data;
    if (this.state.control === 'visual') {
      const classes = ['svg-container'].concat(this.translateControllerData(this.state.data));
      data = <div className={classNames(classes)} dangerouslySetInnerHTML={{__html: xbox}} /> ;
      //data = (<InlineSVG src={require("svg-inline!../assets/xbox.svg")} />);
      //<img src="/src/assets/xbox-controller.svg" />);
    } else {
      data = (
        <pre className="code">
          {JSON.stringify(this.state.data, null, 2)}
        </pre>
      );
    }
    return (
      <div className="controller">
        <div className="controls">
          {['visual','data'].map((control) => {
            const boundClick = this.changeState.bind(this, control);

            const selected = (this.state.control == control) ? 'selected' : ''
            return (<a onClick={boundClick} className={selected}>{control}</a>);
          })}
        </div>
        {data}
      </div>
    );
  }
});

module.exports = Controller;
