FROM ubuntu:16.04
MAINTAINER zichen152
# run script on ubuntu16.04
RUN apt-get update
RUN apt-get install -y openjdk-8-jdk
RUN apt-get install -y python3