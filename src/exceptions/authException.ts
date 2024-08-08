import { AppException } from "./appException";

export class AuthException extends AppException{
    constructor(){
        super("Action not allowed")
    }
}