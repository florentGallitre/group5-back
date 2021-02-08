import { Args } from "./config/args"
import { Config } from "./config/config.service"
import { DB } from "./service/db.service"

console.log("Hello again !");

Args.required("env", ["local", "test", "beta", "prod"])
const ENV = Args.get("env")
//console.log(`Environment is ${ENV}`)

Config.init(ENV)
console.log(Config.all())
DB.init({ 
    host: Config.get("DB_HOST"),
    user: Config.get("DB_USER"),
    password: Config.get("DB_PASSWORD"),
    dbname: Config.get("DB_NAME"),
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