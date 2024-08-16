import { Usertype } from "@enums/userEnum";
import { AuthException } from "@exceptions/authException";
import { ReturnError } from "@exceptions/dtos/exceptionDTO";
import { verifyToken } from "@utils/authUtils";
import { NextFunction, Request, Response } from "express";

export const authMiddleware = (
    req: Request,
    res: Response,
    next: NextFunction
): void => {
    const token = req.headers.authorization;

    verifyToken(token)
        .then(() => {
            next();
        })
        .catch((error) => {
            new ReturnError(res, error);
            next(error);
        });
};

export const authAdminMiddleware = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    try {
        const token = req.headers.authorization;
        console.log("token", token);
        const user = await verifyToken(token);

        if (user.typeUser !== Usertype.ADMIN) {
            console.log(user.typeUser);
            throw new AuthException();
        }

        next();
    } catch (error) {
        new ReturnError(res, error);
        next(error);
    }
};
