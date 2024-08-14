import { ReturnError } from "@exceptions/dtos/exceptionDTO";
import { verifyToken } from "@utils/authUtils";
import { NextFunction, Request, Response } from "express";

export const authMiddleware = async (
    req: Request,
    res: Response,
    next: NextFunction
): Promise<void> => {
    const token = req.headers.authorization;

    await verifyToken(token)
        .then(() => {
            next();
        })
        .catch((error) => {
            new ReturnError(res, error);
        });
};
