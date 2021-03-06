## Problem 1
Upon Step 9 (running `source ~/.bashrc`) I got:

`sh: /vagrant/operator/devel/setup.bash: No such file or directory`

### Solution
Had to cd to operator and run `catkin_make`. Added this to `base-install.sh`.

## Problem 2
gscam not found

Sometimes git submodules don't install after running the install script. For instance, gscam might not be able to find videofile.launch; this would imply that the gscam submodule was not installed.

### Solution

If `/vagrant/operator/src/gscam` is empty, it means the gscam submodule wasn't installed. To install, go to the folder and enter:

```git submodule update --init --recursive```

## Problem 3
```cannot launch node of type [gscam/gscam]: can't locate node [gscam] in package [gscam]```

If you ran into the missing git submodule issue above, you might need to run `catkin_make` again:

```
cd /vagrant/operator
catkin_make
source devel/setup.bash
```

## Problem 4
Running into issues playing a video.

First: gscam relies on gstreamer. See if this plays a video:

`gst-launch-0.10 filesrc location=/path/to/video ! decodebin ! ffmpegcolorspace ! ximagesink`

If that works, not sure what the fuck to do next.

Check us out at [Diamond Reef Explorers](http://www.diamondreefexplorers.org/)
