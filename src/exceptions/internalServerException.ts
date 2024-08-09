import { AppException } from "./appException";

export class InternalServerException extends AppException {
    constructor() {
        super("Internal server error");
    }
}
