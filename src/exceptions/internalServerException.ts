import { AppException } from "./appException";

export class InternalServerException extends AppException {
    constructor(message: string) {
        super(message);
    }
}
