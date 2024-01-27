# API REST GAMES 


> This project is a REST API that allows you to create, update, delete and list games. A game consists of a name, a price, and the year of release. The API uses the MySQL database to store game data and Express to manage routes and requests

## 💻 Prerequisites

- To install this project, you need to have Node.js, MySQL and npm installed on your machine.

## 🚀 Installing api-rest-games dependencies 

To install api-rest-games dependencies follow these steps:

Windows:

```
npm install express --save
npm install body-parser -- save
npm install mysql2 --save
npm install sequelize --save
npm install nodemon --save
```

## ☕ Using api-rest-games

To use api-rest-games, follow these steps

```
Follow the steps below to use the application:

1. Download or clone the project repository on your computer.
2. Enter MySQL and create a database `create database gameapi`
3. Open the project folder in your code editor or IDE of preference.
4. Instale as dependências do projeto com o comando `npm install`.
5. Enter the connection.js file in the database folder
5. Put your MySQL password in the third parameter of the connection variable.
6. Open the Game.js file inside the games file, uncomment lines 19 to 21 and change `false` to `true`
7. Open the terminal and run the command `npx nodemon index.js`
8. Finally, open the Games.js file again and change `true` to `false`

```

## How to use

To use this API, you can make HTTP requests to the following endpoints:

- `GET /games`: Returns a list of all games registered in the database.
- `GET /game/:id`: Returns data for a specific game by its id.
- `POST /game`: Creates a new game in the database. The request body must contain a JSON object with the properties `name`, `price` and `year`.
- `PUT /game/:id`: Updates data for a specific game by its id. The request body must contain a JSON object with the properties you want to change.
- `DELETE /game/:id`: Deletes a specific game by its id from the database.

## How to test

To test this API, you can use tools like Postman, Insomnia or Curl
