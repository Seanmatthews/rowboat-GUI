#!/usr/bin/env python
#
import rospy
from std_msgs.msg import String
from random import randint

status = 'running'

def publish_random_number():
    if status == 'running':
        string = "%s" % randint(0,9)
        #string = "%s" % rospy.get_time()
        rospy.loginfo(string)
        pub.publish(string)

def callback(data):
    global status
    rospy.loginfo("oontz: %s" % data.data)
    if data.data == 'start':
        status = 'running'
    elif data.data == 'stop':
        status = 'stopped'
    rospy.loginfo(status)

def main():
    rate = rospy.Rate(10) # 10hz
    while not rospy.is_shutdown():
        publish_random_number()
        rate.sleep()

rospy.Subscriber("ui", String, callback)

pub = rospy.Publisher('chatter', String, queue_size=10)
rospy.init_node('talker', anonymous=True)

if __name__ == '__main__':
    try:
        main()
    except rospy.ROSInterruptException:
        pass
