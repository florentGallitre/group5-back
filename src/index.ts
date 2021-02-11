import * as dotenv from "dotenv"
import { UserRepositoryService } from "./repository/user.repository";
// read .env file before everything else
dotenv.config()
// import my services afterwards
import { config, DB } from "./services"
import { MovieRepositoryService } from "./repository/movie.repository"


/******Express******/

// server.js
var express = require('express');
var app = express();

// start the server
app.listen(process.env.PORT, function () {
    console.log(`Example app listening on port ${process.env.PORT}`)
});

// route our app
app.get('/', (req: any, res: any) => {
    res.send('hello world!');
});

// app.get('/movies', (req: any, res:any) => {
//     const limit = req.query.limit

//     MovieRepositoryService.getMovies(limit)
//     .then((movies: any) => {
//         res.send(movies)
//     }).catch(e => {
//         res.send(500, { error: e.toString() })
//     })
//})