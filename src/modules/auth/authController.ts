import { Router, Request, Response } from "express";
import { AuthDto } from "./dtos/authDTO";
import { validateAuth } from "./authService";

const authRouter = Router();

const router = Router();

authRouter.use("/auth", router);

router.post(
    "/",
    async (
        req: Request<undefined, undefined, AuthDto>,
        res: Response
    ): Promise<void> => {
        const user = await validateAuth(req.body);
        res.send(user);
    }
);

export default authRouter;
