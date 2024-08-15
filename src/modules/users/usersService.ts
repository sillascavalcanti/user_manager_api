import { PrismaClient } from "@prisma/client";
import { UserModeles } from "./usersModules";
import { UserDTO } from "./dtos/userDTO";
import { NotFoundExeception } from "@exceptions/notFoundException";
import { BadRequestException } from "@exceptions/badRequestException";
import { creatPasswordHashed } from "src/utils/passwordUtils";
import { converteToInteger } from "@utils/urlUtils";

const prisma = new PrismaClient();

export const getUsers = async (): Promise<UserModeles[]> => {
    const user = await prisma.user.findMany();

    if (user?.length == 0) {
        throw new NotFoundExeception("user");
    }

    return user;
};

export const getUserByCpf = async (cpf: string): Promise<UserModeles> => {
    const user = await prisma.user.findUnique({ where: { cpf } });

    if (!user) {
        throw new NotFoundExeception("User");
    }

    return user;
};

export const getUserByEmail = async (email: string): Promise<UserModeles> => {
    const user = await prisma.user.findUnique({ where: { email } });

    if (!user) {
        throw new NotFoundExeception("User");
    }

    return user;
};

export const getUsersById = async (query: string): Promise<UserDTO> => {
    const id = await converteToInteger(query);
    const user = await prisma.user.findFirst({ where: { id } });

    if (user == null) {
        throw new NotFoundExeception("user");
    }

    return user;
};

export const createUser = async (body: UserDTO): Promise<UserModeles> => {
    const checkEmail = await getUserByEmail(body.email).catch(() => undefined);
    if (checkEmail) {
        throw new BadRequestException("Email alredy exist");
    }

    const checkCpf = await getUserByCpf(body.cpf).catch(() => undefined);
    if (checkCpf) {
        throw new BadRequestException("Cpf alredy exist");
    }

    if (body.typeUser !== 1 && body.typeUser !== 2) {
        throw new BadRequestException("User type is invalid");
    }

    const user: UserDTO = {
        ...body,
        password: await creatPasswordHashed(body.password),
    };

    return prisma.user.create({
        data: user,
    });
};

export const removeUser = async (body: UserDTO) => {
    return prisma.user.delete({ where: body });
};
