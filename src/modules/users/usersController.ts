import { Request, Response, Router } from "express";
import { addUser, deletUser, getUsers, getUsersById } from "./usersService";
import { UserDTO } from "./dtos/userDTO";
import { NotFoundExeception } from "@exceptions/notFoundException";

const userRouter = Router();

const router = Router();

userRouter.use("/users", router);

router.get("/", async (_, res: Response): Promise<void> => {
    const user = await getUsers().catch((error) => {
        if (error instanceof NotFoundExeception) {
            res.status(204);
        } else {
            res.status(500).send("Internal Server Error");
        }
    });
    res.send(user);
});

router.get("/get", async (req:Request<undefined,undefined, UserDTO>, res: Response): Promise<void> => {
    const user = await getUsersById(req.body).catch((error) => {
        if (error instanceof NotFoundExeception) {
            res.status(204);
        } else {
            res.status(500).send("Internal Server Error");
        }
    });
    res.send(user);
});

router.post(
    "/",
    async (
        req: Request<undefined, undefined, UserDTO>,
        res: Response
    ): Promise<void> => {
        const user = await addUser(req.body);
        res.send(user);
    }
);

router.delete(
    "/",
    async (
        req: Request<undefined, undefined, UserDTO>,
        res: Response
    ): Promise<void> => {
        const user = await deletUser(req.body);
        res.send(user);
    }
);

export default userRouter;
