import * as dotenv from "dotenv"
import { UserRepositoryService } from "./repository/user.repository";
// read .env file before everything else
dotenv.config()
// import my services afterwards
import { config, DB } from "./services"


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
app.get('/', function (req, res) {
    res.send('hello world!');
});

app.get('/users', (req: any, res: any) => {
    const limit = req.query.limit

    UserRepositoryService.getUsers(limit)
        .then((users: any) => {
            res.send(users)
        }).catch(e => {
            // logs?
            res.send(500, { error: e.toString() })
        })
})

