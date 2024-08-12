import { compare, hash } from "bcrypt";

export const creatPasswordHashed = async (password : string): Promise<string>=>{
    const saltRounds = 10;

    return hash(password, saltRounds)
}

export const validatePassword = async (password: string, passwordHashed:string): Promise<Boolean> =>{
    return compare(password, passwordHashed)
}