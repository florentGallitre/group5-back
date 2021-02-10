"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRepositoryService = void 0;
const services_1 = require("../services");
const User_1 = require("../model/User");
class UserRepository {
    getUsers(limit = 10, offset = 0) {
        const queryString = `SELECT id, name, filmmaker, time, releaseDate FROM users LIMIT ${limit} OFFSET ${offset}`;
        return new Promise((resolve, reject) => {
            services_1.DB.query(queryString)
                .then((results) => {
                resolve(results.map(row => new User_1.User(row)));
            }).catch(e => {
                reject(e);
            });
        });
    }
}
exports.UserRepositoryService = new UserRepository();
