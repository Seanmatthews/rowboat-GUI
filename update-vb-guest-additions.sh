#!/bin/sh

VERSION=$1

cd /opt
sudo wget -c http://download.virtualbox.org/virtualbox/$VERSION/VBoxGuestAdditions_$VERSION.iso
sudo mount VBoxGuestAdditions_$VERSION.iso -o loop /mnt
cd /mnt
sudo sh VBoxLinuxAdditions.run --nox11
cd /opt
sudo rm VBoxGuestAdditions_$VERSION.iso
sudo /etc/init.d/vboxadd setup
sudo update-rc.d vboxadd defaults
sudo update-rc.d vboxadd enable
