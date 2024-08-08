import { AppException } from "./appException"

export class BadRequestException extends AppException{
    constructor(message:string){
        super(message)
    }
}