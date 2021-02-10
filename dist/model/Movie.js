"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Movie = void 0;
class Movie {
    constructor(data) {
        this.id = null;
        this.title = null;
        this.time = null;
        this.filmmaker = null;
        this.releaseDate = null;
        this.summary = null;
        if (data) {
            this.hydrate(data);
        }
    }
    hydrate(data) {
        for (let prop in data) {
            if (this.hasOwnProperty(prop)) {
                this[prop] = data[prop];
            }
        }
    }
}
exports.Movie = Movie;
