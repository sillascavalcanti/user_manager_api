export class AppException extends Error {
    errorCode: number;

    constructor(mensage: string, errorCode: number) {
        super(mensage);

        this.errorCode = errorCode;
    }
}
