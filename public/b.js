"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = void 0;
const a_1 = require("./a");
class UserService {
    constructor() {
        this.logger = new a_1.Logger(); // 💡 Logger est instancié ici
    }
    createUser(username) {
        this.logger.log(`Utilisateur créé : ${username}`);
        return `Bienvenue, ${username}`;
    }
}
exports.UserService = UserService;
