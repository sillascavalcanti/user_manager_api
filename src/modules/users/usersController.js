import { Router } from "express";
import { addUser, getUsers } from "./usersService.js";

const userRouter = Router();

const router = Router();

userRouter.use("/users", router);

router.get("/", async function (req, res) {
    const user = await getUsers();
    res.send(user);
});

router.post("/", async (req, res) => {
    const user = await addUser(req.body);
    res.send(user);
});


export default userRouter;
