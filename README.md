# express-movie-database

An online database containing information and statistics about movies, the cast involved, and crew that heled make the film a reality



## Table of Contents
* Introducton
* Features
* Technologies
* Project Planning
* Testing
* Setup and Geting Started
* Contribution Guidelines

## Project Planning
The project plan and tasks are handled by using project managment tool jira

This project is created with:
* Jira
* draw.io
* nodejs
* express
* sqlite
* sequelize
* jest
* postman

## Setup
* npm init -y
* npm install jest sqlite3 sequelize express
* Check your package.json to confirm that dependencies were added
* Revise scripts in package.json:
* "scripts": {
    "test": "jest",
    "test:report": "jest --coverage=true"
  },
* Setup your SQLite3 database with a Sequelize ORM
* use the below comand to run the supertest and we need to install supertest 
 * we need to include "type":"module" in the package manager
* NODE_OPTIONS=--experimental-vm-modules npx jest index_server.test.js 
* when testing this code  the other futures like server.js dont work so we need to remove "type":"module" after supertest
## Contribution Guidelines
To make suggestions, create a new issue on this repo.
