## Problem 1
Upon Step 9 (running `source ~/.bashrc`) I got:

`sh: /vagrant/operator/devel/setup.bash: No such file or directory`

### Solution
Had to cd to operator and run `catkin_make`. Added this to `base-install.sh`.

## Problem 2
gscam not found. Have to update git submodules.

### Solution
`git submodule update --init --recursive`

I ran this from `/vagrant/oeprator/src`. Not sure if the directory matters or not because I don't really know what this command does.

## Problem 3
Running into issues playing a video.

First: gscam relies on gstreamer. See if this plays a video:

`gst-launch-0.10 filesrc location=/path/to/video ! decodebin ! ffmpegcolorspace ! ximagesink`

If that works, not sure what the fuck to do next.
