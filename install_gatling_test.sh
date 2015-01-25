sudo apt-get update
sudo apt-get install gcc
sudo apt-get install make
sudo apt-get install unzip

sudo apt-get install apache2
sudo apt-get install php5 libapache2-mod-php5
sudo apt-get install mysql-server
sudo apt-get install libapache2-mod-auth-mysql php5-mysql phpmyadmin
sudo /etc/init.d/apache2 restart

sudo apt-get install ant
sudo add-apt-repository ppa:webupd8team/java
sudo apt-get update
sudo apt-get install oracle-java7-installer
export JAVA_HOME=/usr/lib/jvm/java-7-oracle/

wget http://download.java.net/glassfish/4.0/release/glassfish-4.0.zip
unzip glassfish-4.0.zip
rm glassfish-4.0.zip
export GLASSFISH_HOME=~/glassfish4/glassfish
export PATH=$GLASSFISH_HOME/bin:$PATH
export CLASSPATH=$GLASSFISH_HOME/lib/*:./:$CLASSPATH
cp ~/TrainsProtocolLatency/TwitterServer.war ./

cp -rf TrainsProtocolLatency/TwitterServerExtra/ ./
git clone https://github.com/simatic/TrainsProtocol.git
cd TrainsProtocol
git checkout jni
export LD_LIBRARY_PATH=/home/ubuntu/TrainsProtocol/lib:$LD_LIBRARY_PATH
cp ~/TrainsProtocolLatency/stateMachine.c src/
cd tests/integration/latency/
cp ~/TrainsProtocolLatency/latency_AppTwitter.c latency.c
cp ~/TrainsProtocolLatency/Makefile ./
cd ~

wget http://download.zeromq.org/zeromq-4.0.5.tar.gz
tar xvfz zeromq-4.0.5.tar.gz
rm zeromq-4.0.5.tar.gz
cd zeromq-4.0.5
sudo apt-get install build-essential g++
./configure
make
sudo make install
cd ~

git clone https://github.com/zeromq/jzmq.git
cd jzmq
sudo apt-get install pkg-config libtool autoconf automake
sudo ./autogen.sh
sudo ./configure
sudo make
sudo make install
export CLASSPATH=/usr/local/share/java/zmq.jar:$CLASSPATH
export LD_LIBRARY_PATH=/usr/local/lib:$LD_LIBRARY_PATH
cp /usr/local/share/java/zmq.jar ~/glassfish4/glassfish/lib/
cd ~

sudo chown ubuntu:ubuntu -R TrainsProtocol
sudo chown ubuntu:ubuntu -R glassfish4
sudo chown ubuntu:ubuntu -R jzmq

cp ~/TrainsProtocolLatency/set_env_gatling_test.sh ./
sudo chmod +x set_env_gatling_test.sh
source set_env_gatling_test.sh
