import { Request, Response, Router } from "express";
import { addUser, getUsers } from "./usersService";
import { UserInsertDTO } from "./dtos/userInsertDTO";

const userRouter = Router();

const router = Router();

userRouter.use("/users", router);

router.get("/", async (_, res: Response):Promise<void> => {
    const user = await getUsers();
    res.send(user);
});

router.post("/", async (req:Request<undefined,undefined,UserInsertDTO>, res:Response) : Promise<void> => {
    const user = await addUser(req.body);
    res.send(user)
});


export default userRouter;
