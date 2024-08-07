import { Router } from "express";
import { PrismaClient } from "@prisma/client";

const userRouter = Router();

const router = Router();

userRouter.use("/users", router);

router.get("/", async function (req, res) {
    const prisma = new PrismaClient();
    const user = await prisma.user.findMany();
    res.send("user", user);
});

router.get("/:nome", function (req, res) {
    res.send("testnome");
});

export default userRouter;
