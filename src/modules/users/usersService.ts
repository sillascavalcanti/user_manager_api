import { PrismaClient } from "@prisma/client";
import { UserModeles } from "./usersModules";
import { UserDTO } from "./dtos/userDTO";
import { NotFoundExeception } from "@exceptions/notFoundException";

const prisma = new PrismaClient();

export const getUsers = async (): Promise<UserModeles[]> => {
    const user = await prisma.user.findMany();

    if (user?.length == 0) {
        throw new NotFoundExeception("user");
    }

    return user;
};

export const getUsersById = async (body: UserDTO): Promise<UserModeles> => {
    const user = await prisma.user.findUnique({ where: body });

    if (user == null) {
        throw new NotFoundExeception("user");
    }

    return user;
};

export const addUser = async (body: UserDTO): Promise<UserModeles> => {
    return prisma.user.create({
        data: body,
    });
};

export const deletUser = async (body: UserDTO) => {
    return prisma.user.delete({ where: body });
};
