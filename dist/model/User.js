"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
class User {
    constructor(data) {
        this.id = null;
        this.name = null;
        this.surname = null;
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
exports.User = User;
