"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MovieRepositoryService = void 0;
const services_1 = require("../services");
const Movie_1 = require("../model/Movie");
class MovieRepository {
    getMovies(limit = 10, offset = 0) {
        const queryString = `SELECT id, title, filmmaker_Id, time, releaseDate, summary FROM Movie LIMIT ${limit} OFFSET ${offset}`;
        return new Promise((resolve, reject) => {
            services_1.DB.query(queryString)
                .then((results) => {
                resolve(results.map(row => new Movie_1.Movie(row)));
            }).catch(e => {
                reject(e);
            });
        });
    }
}
exports.MovieRepositoryService = new MovieRepository();
