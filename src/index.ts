import { Args } from "./config/args"
import { config } from "./config/config.service"
import { DB } from "./services/db.service"

console.log("Hello again !");

Args.required("env", ["local", "test", "beta", "prod"])
const ENV = Args.get("env")
//console.log(`Environment is ${ENV}`)

config.init(ENV)
console.log(config.all())
DB.init({ 
    host: config.get("DB_HOST"),
    user: config.get("DB_USER"),
    password: config.get("DB_PASSWORD"),
    dbname: config.get("DB_NAME"),
})

DB.query("SELECT * FROM users")
    .then(results => {
        console.log(results)
    }).catch(e => {
        console.log(e)
    })





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