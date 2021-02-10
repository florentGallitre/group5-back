"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv = require("dotenv");
// read .env file before everything else
dotenv.config();
/******Express******/
// server.js
var express = require('express');
var app = express();
var port = 3000;
// start the server
app.listen(port, function () {
    console.log('Go to : http://localhost:3000/');
});
// route our app
app.get('/', (req, res) => {
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
