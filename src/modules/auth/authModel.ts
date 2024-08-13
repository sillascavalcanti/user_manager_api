import { UserModeles } from "@modules/users/usersModules";

export class AuthModules {
    token: string;
    user: UserModeles;

    constructor(token: string, user: UserModeles) {
        this.token = token;
        this.user = user;
    }
}
