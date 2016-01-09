#!/bin/bash
sudo apt-get update

# Build 
sudo apt-get -y install git
sudo apt-get -y install emacs
sudo apt-get -y install build-essential
sudo apt-get -y install python-dev
sudo apt-get -y install g++

# Video
sudo add-apt-repository -y ppa:mc3man/trusty-media
sudo apt-get -y update
sudo apt-get -y install libgstreamer0.10-dev 
sudo apt-get -y install libgstreamer-plugins-base0.10-dev
sudo apt-get -y install gstreamer-0.10
sudo apt-get -y install gstreamer-app-0.10
sudo apt-get -y install gstreamer0.10*
sudo apt-get -y install gstreamer0.10-tools
sudo apt-get -y install gstreamer0.10-ffmpeg

# Google Chrome
sudo apt-get -y install libxss1 libappindicator1 libindicator7
sudo apt-get -y install libnspr4 libnss3 libnss3-nssdb libpango1.0-0
wget https://dl.google.com/linux/direct/google-chrome-stable_current_amd64.deb
sudo dpkg -i google-chrome*.deb

# ROS
sudo sh -c 'echo "deb http://packages.ros.org/ros/ubuntu $(lsb_release -sc) main" > /etc/apt/sources.list.d/ros-latest.list'
sudo apt-key adv --keyserver hkp://pool.sks-keyservers.net --recv-key 0xB01FA116
sudo apt-get update
sudo apt-get -y install ros-jade-desktop-full
sudo rosdep init
rosdep update
echo "source /opt/ros/jade/setup.bash" >> ~/.bashrc
source /opt/ros/jade/setup.bash

sudo apt-get -y install python-rosinstall

# Update Git Submodules, for GScam
git submodule update --init --recursive

# Set up workspace
cd /vagrant/operator
catkin_make
source /vagrant/operator/devel/setup.bash

# Environment
echo "source /vagrant/operator/devel/setup.bash" >> ~/.bashrc 

exit
