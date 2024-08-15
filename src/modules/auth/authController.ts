import { Router, Request, Response } from "express";
import { AuthDto } from "./dtos/authDTO";
import { validateAuth } from "./authService";
import { ReturnError } from "@exceptions/dtos/exceptionDTO";

const authentication = async (
    req: Request<undefined, undefined, AuthDto>,
    res: Response
): Promise<void> => {
    const user = await validateAuth(req.body).catch((error) => {
        new ReturnError(res, error);
    });
    res.send(user);
};

const authRouter = Router();

const router = Router();

authRouter.use("/auth", router);

router.post("/", authentication);

export default authRouter;
