import express from "express";
import { userRouter } from "./modules/users/userController.js";
import { productRouter } from "./modules/products/productsController.js";

const app = express();

app.use(userRouter);
app.use(productRouter);

app.listen(8080, function () {
    console.log("Server on");
});
