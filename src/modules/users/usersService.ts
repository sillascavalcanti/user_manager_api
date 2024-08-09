import { PrismaClient } from "@prisma/client";
import { UserModeles } from "./usersModules";
import { UserInsertDTO } from "./dtos/userDTO";
import { UserDeleteDTO } from "./dtos/userDTO";
import { NotFoundExeception } from "@exceptions/notFoundException";
import { InternalServerException } from "@exceptions/internalServerException";

const prisma = new PrismaClient();

export const getUsers = async (): Promise<UserModeles[]> => {
    const user = await prisma.user.findMany();

    if (user.length == 0) {
        throw new InternalServerException("user");
    }

    if (user?.length == 0) {
        throw new NotFoundExeception("user");
    }

    return user;
};

export const addUser = async (body:UserInsertDTO):Promise<UserModeles> => {
    return prisma.user.create({
         data: body 
        });
};

export const deletUser = async (body:UserDeleteDTO) => {
    return prisma.user.delete({where: body})
}