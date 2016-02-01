'use strict';
const React = require('react');

const Container = require('./components/layout/container');
const Header = require('./components/layout/header');
const Controller = require('./components/controller');
const Video = require('./components/video');
const ROS = require('./ros');

const Application = React.createClass({
  render: function() {
    return (
      <div className="application">
        <Header />
        <Container layout={'horizontal'}>
          <Video ROS={ROS} />
          <Controller ROS={ROS} />
        </Container>
      </div>
    );
  }
});

module.exports = Application;
