import { Request, Response, Router } from "express";
import { addUser, deletUser, getUsers, getUsersById } from "./usersService";
import { UserDTO } from "./dtos/userDTO";
import { NotFoundExeception } from "@exceptions/notFoundException";
import { ReturnError } from "@exceptions/dtos/exceptionDTO";
import { UserModeles } from "./usersModules";
import { Console } from "console";
import { verifyToken } from "@utils/authUtils";

const userRouter = Router();

const router = Router();

userRouter.use("/users", router);

router.get("/", async (req: Request, res: Response): Promise<void> => {
    const autorization = req.headers.authorization;

    verifyToken(autorization).catch((error) => {
        new ReturnError(res, error);
    });

    const user = await getUsers().catch((error) => {
        if (error instanceof NotFoundExeception) {
            res.status(204);
        } else {
            new ReturnError(res, error);
        }
    });
    res.send(user);
});

router.get(
    "/get",
    async (
        req: Request<undefined, undefined, UserModeles>,
        res: Response
    ): Promise<void> => {
        const user = await getUsersById(req.body.id).catch((error) => {
            if (error instanceof NotFoundExeception) {
                res.status(204);
            } else {
                new ReturnError(res, error);
            }
        });
        res.send(user);
    }
);

router.post(
    "/",
    async (
        req: Request<undefined, undefined, UserDTO>,
        res: Response
    ): Promise<void> => {
        const user = await addUser(req.body).catch((error) => {
            new ReturnError(res, error);
        });
        res.send(user);
    }
);

router.delete(
    "/",
    async (
        req: Request<undefined, undefined, UserDTO>,
        res: Response
    ): Promise<void> => {
        const user = await deletUser(req.body).catch((error) => {
            new ReturnError(res, error);
        });
        res.send(user);
    }
);

export default userRouter;
