import { Router } from "express";

const userRouter = Router();

const router = Router();

userRouter.use("/users", router);

router.get("/", function (req, res) {
    res.send("test");
});

router.get("/:nome", function (req, res) {
    res.send("testnome");
});

export default userRouter;