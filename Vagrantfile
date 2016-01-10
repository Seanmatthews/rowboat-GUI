# -*- mode: ruby -*-
# vi: set ft=ruby :

# All Vagrant configuration is done below. The "2" in Vagrant.configure
# configures the configuration version (we support older styles for
# backwards compatibility). Please don't change it unless you know what
# you're doing.
Vagrant.configure(2) do |config|
  # The most common configuration options are documented and commented below.
  # For a complete reference, please see the online documentation at
  # https://docs.vagrantup.com.

  # Every Vagrant development environment requires a box. You can search for
  # boxes at https://atlas.hashicorp.com/search.

  # Disable automatic box update checking. If you disable this, then
  # boxes will only be checked for updates when the user runs
  # `vagrant box outdated`. This is not recommended.
  # config.vm.box_check_update = false

  # Create a forwarded port mapping which allows access to a specific port
  # within the machine from a port on the host machine. In the example below,
  # accessing "localhost:8080" will access port 80 on the guest machine.

  # Create a private network, which allows host-only access to the machine
  # using a specific IP.
  # config.vm.network "private_network", auto_config: false

  # Create a public network, which generally matched to bridged network.
  # Bridged networks make the machine appear as another physical device on
  # your network.

  # Share an additional folder to the guest VM. The first argument is
  # the path on the host to the actual folder. The second argument is
  # the path on the guest to mount the folder. And the optional third
  # argument is a set of non-required options.
  # config.vm.synced_folder "../data", "/vagrant_data"

  config.ssh.forward_x11 = true
  config.vm.box = "ubuntu/trusty64"
  config.vm.network "forwarded_port", guest: 8554, host: 8554  
  config.vm.network "forwarded_port", guest: 8080, host: 8080
  config.vm.network "forwarded_port", guest: 9090, host: 9090 # Default rosbridge_server
  config.vm.network :public_network, ip: "10.5.5.99", :public_network => "en5"
  #config.vm.network :public_network, ip: "192.168.1.99", :public_network => "en5"
  # config.vm.provision "shell",
    # run: "always",
    # inline: "ifconfig eth1 192.168.1.111 netmask 255.255.255.255 broadcast 192.169.1.255 up"

  # Provider-specific configuration so you can fine-tune various
  # backing providers for Vagrant. These expose provider-specific options.
  # Example for VirtualBox:
  #
  config.vm.provider "virtualbox" do |vb|

     vb.name = "rowboat-GUI"
     vb.gui = false
  #
  #   # Customize the amount of memory on the VM:
     vb.memory = "2048"

     vb.customize ["modifyvm", :id, "--usb", "on"]
     vb.customize ["modifyvm", :id, "--usbehci", "on"]
     vb.customize ["usbfilter", "add", "0",
       "--target", :id,
       "--name", "xbox360",
       "--vendorid", "0x045e",
       "--productid", "0x028e"]

    vb.customize ["usbfilter", "add", "0",
      "--target", :id,
      "--name", "liveCam",
      "--vendorid", "0x041e",
      "--productid", "0x4095"]

     # vb.customize ["modifyvm", 

#     vb.customize ["modifyvm", :id, "--nicpromisc2", "allow-all"]
#     vb.customize ["modifyvm", :id, "--nicpromisc3", "allow-all"]
  end
  #
  # View the documentation for the provider you are using for more
  # information on available options.

  # Define a Vagrant Push strategy for pushing to Atlas. Other push strategies
  # such as FTP and Heroku are also available. See the documentation at
  # https://docs.vagrantup.com/v2/push/atlas.html for more information.
  # config.push.define "atlas" do |push|
  #   push.app = "YOUR_ATLAS_USERNAME/YOUR_APPLICATION_NAME"
  # end

  # Enable provisioning with a shell script. Additional provisioners such as
  # Puppet, Chef, Ansible, Salt, and Docker are also available. Please see the
  # documentation for more information about their specific syntax and use.
  # config.vm.provision "shell", inline: <<-SHELL
  #   sudo apt-get update
  #   sudo apt-get install -y apache2
  # SHELL
end
