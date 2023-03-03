# Bank API

This is a RESTful API for a banking application built using Node.js, Express, and MongoDB. It allows users to create accounts, make transactions, and view their transaction history.

## Installation

1. Insall the backend from this repository by following the steps over there.
2. Clone this repository: `git clone https://github.com/QuentDa/QuentinDeAndrade_13_2022`
2. Install dependencies: `npm install`

## Usage

1. To start the backend, run `npm run dev:server` in the backend folder. The server will start listening on port 3000 by default. You can change the port by setting the `PORT` environment variable.
2. To start the frontend, run `npm run start` in the frontend folder.


## API Endpoints

The following API endpoints are available:

- `/user`: User management
- Replace the swagger located in the front-end folder with the one in the back-end folder. Then you should be able to access it at http://localhost:3001/api-docs (port might be different for you, check your terminal)

## Dependencies

This project uses the following dependencies:

- @reduxjs/toolkit
- @testing-library/jest-dom
- @testing-library/react
- @testing-library/user-event
- axios
- mongodb
- react
- react-dom
- react-redux
- react-router-dom
- react-scripts
- redux