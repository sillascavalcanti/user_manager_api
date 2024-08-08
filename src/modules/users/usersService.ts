import { PrismaClient } from "@prisma/client";
import { UserModeles } from "./usersModules";
import { UserInsertDTO } from "./dtos/userDTO";
import { UserDeleteDTO } from "./dtos/userDTO";

const prisma = new PrismaClient();

export const getUsers = async (): Promise<UserModeles[]> => {
    return prisma.user.findMany();
};

export const addUser = async (body:UserInsertDTO):Promise<UserModeles> => {
    return prisma.user.create({
         data: body 
        });
};

export const deletUser = async (body:UserDeleteDTO) => {
    return prisma.user.delete({where: body})
}