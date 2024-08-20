import { Request, Response, Router } from "express";
import {
    createUser,
    getUsers,
    getUsersById,
    removeUserById,
    updatePassword,
} from "./usersService";
import { UserDTO, UserEditePasswordDTO } from "./dtos/userDTO";
import { NotFoundExeception } from "@exceptions/notFoundException";
import { ReturnError } from "@exceptions/dtos/exceptionDTO";
import { authAdminMiddleware, authMiddleware } from "src/middleware/authMiddleware";
import { UserModeles } from "./usersModules";

const getUserList = async (req: Request, res: Response): Promise<void> => {
    const user = await getUsers().catch((error) => {
        new ReturnError(res, error);
    });
    res.send(user);
};

const getUserById = async (
    req: Request<FindUserDTO>,
    res: Response
): Promise<void> => {
    const {id} = req.params
    const user = await getUsersById(id).catch((error) => {
        if (error instanceof NotFoundExeception) {
            res.status(204);
        } else {
            new ReturnError(res, error);
        }
    });
    res.send(user);
};

const insertUser = async (
    req: Request<undefined, undefined, UserDTO>,
    res: Response
): Promise<void> => {
    const user = await createUser(req.body).catch((error) => {
        new ReturnError(res, error);
    });
    res.send(user);
};

const deleteUserById = async (
    req: Request<undefined, undefined, UserDTO>,
    res: Response
): Promise<void> => {
    const user = await removeUserById(req.url).catch((error) => {
        new ReturnError(res, error);
    });
    res.send(user);
};

const editePassword = async (
    req: Request <UserEditePasswordDTO>,
    res: Response
): Promise<void> => {
    const {id} = req.params
    const user = await updatePassword(id, req.body).catch((error) => {
        new ReturnError(res, error);
    });

    res.send(user);
};

const userRouter = Router();

const router = Router();

userRouter.use("/users", router);

router.post("/create", insertUser);

router.use(authMiddleware)

router.patch("/edite/password/:id", editePassword);

router.use(authAdminMiddleware);

router.get("/userlist", getUserList);

router.get("/user/:id", getUserById);

router.delete("/delete/:id", deleteUserById);

export default userRouter;
