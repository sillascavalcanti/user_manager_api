import { Router } from "express";

export const productRouter = Router();

const router = Router();

productRouter.use("/products", router);

router.get("/", function (req, res) {
    res.send("products");
});

router.get("/test", function (req, res) {
    res.send("testProduct");
});

