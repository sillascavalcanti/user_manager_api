import { AppException } from "./appException";

export class NotFoundExeception extends AppException{
    constructor(entity:string){
        super(entity)
    }
}