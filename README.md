# SCE Final project Mern stack dockerized
![node1](https://play-lh.googleusercontent.com/v1GgVF6GEpIbNqxaLzvKjAFxQc_SM8FOgNALIXzH8YQXShT3OLcIxYizAia9sUddtD8)

Dockerized MERN stack developement environment

- For MacOS and Ubuntu
    - Install Docker
    - Clone the repo
    - Run `docker-compose up`
    - Browse to localhost:3000
    - Stop containers and removes volumes:  Run `docker-compose down -v` 

- For Windows
    - Install Docker or DockerToolbox
    - If DockerToolbox, then clone the repo in C:/Users/[username], eg. C:/Users/suman
    - Change port-forward settings in Virtualbox
    (https://www.jhipster.tech/twillips/020_tip_using_docker_containers_as_localhost_on_mac_and_windows.html)
    - Run `docker-compose up`
    - Browse to localhost:3000
    - Stop containers and removes volumes:  Run `docker-compose down -v`
### When making changes to Dockerfile or to package.json:
*  Delete the old image with docker rmi
*  run docker-compose up, compose will recreate the image and will run npm install.

# mern-dockerized
