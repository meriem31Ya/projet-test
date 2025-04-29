import { Logger } from "./a";

export class UserService {
  private logger: Logger;

  constructor() {
    this.logger = new Logger(); // 💡 Logger est instancié ici
  }

  createUser(username: string): string {
    this.logger.log(`Utilisateur créé : ${username}`);
    return `Bienvenue, ${username}`;
  }
}
