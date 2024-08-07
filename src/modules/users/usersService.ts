import { PrismaClient } from "@prisma/client";
import { UserModeles } from "./usersModules";
import { UserInsertDTO } from "./dtos/userInsertDTO";

const prisma = new PrismaClient();

export const getUsers = async (): Promise<UserModeles[]> => {
    return prisma.user.findMany();
};

export const addUser = async (body:UserInsertDTO):Promise<UserModeles> => {
    return prisma.user.create({
         data: body 
        });
};
