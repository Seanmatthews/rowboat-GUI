# rowboat-GUI
This is the operator/playback GUI for Brooklyn's [Diamond Reef Explorer's](http://www.diamondreefexplorers.org/) autonomous underwater vehicle, Rowboat-1.  The project is currently in its planning and design phase. If you'd like help out, no matter what your skills, join our meetup group at http://www.meetup.com/Tech-Tinkerers-NYC. 

# Dev Setup

## Mac/Linux Setup
0. Install VirtualBox from https://www.virtualbox.org/wiki/Downloads
0. Install Vagrant from https://www.vagrantup.com
2. Install Git from https://git-scm.com 
1. Checkout the project with Git
3. `vagrant up` (this might take a few)
4. `vagrant ssh`
5. `/vagrant/base-install.sh`
6. `source ~/.bashrc`
7. If you’re new to ROS, follow the tutorials at http://wiki.ros.org/ROS/Tutorials

## Windows Setup 
1. Install VirtualBox from https://www.virtualbox.org/wiki/Downloads
2. Download Ubuntu 14.04 Desktop from http://www.ubuntu.com
3. Create a new Linux 64-bit VM and follow the steps to install your downloaded Ubuntu image.
4. `sudo apt-get install git`
5. `git clone https://github.com/Seanmatthews/rowboat-GUI.git`
6. From the rowboat-GUI/install directory, run `./base-install.sh`
7. `source ~/.bashrc`
8. If you’re new to ROS, follow the tutorials at http://wiki.ros.org/ROS/Tutorials

## Startup
1. `roscore`
1. For testing with video file `roslaunch gscam videofile.launch FILENAME:=<filename.mp4>`
1. To visualize the stream `rosrun image_view image_view image:=/videofile/camera/image_raw` 

## Installing additional ROS packages

`ros-packages-install.sh` has additional packages like the web-video-server. To install:

```
./ros-packages-install.sh
source ~/.bashrc
```

## Problems?

Check out the [problems file](https://github.com/Seanmatthews/rowboat-GUI/blob/master/Problems.md).

## Webcam
The webcam won't appear in Vagrant by default. Follow these instructions:

`http://code-chronicle.blogspot.com/2014/08/connect-usb-device-through-vagrant.html`

Then, outside of Vagrant, `VBoxManage list usbhost` should return the webcam. Within vagrant, `lsusb` should also return the webcam.
