#!/bin/bash
wait-for fullcycle-docker-node-database:3306 -t 40

node app.js