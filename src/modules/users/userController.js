import { Router } from "express";

export const userRouter = Router();

const router = Router();

userRouter.use("/user", router);

router.get("/", function (req, res) {
    res.send("test");
});

router.get("/:nome", function (req, res) {
    res.send("testnome");
});
