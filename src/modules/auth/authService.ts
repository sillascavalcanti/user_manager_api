import { UserModeles } from "@modules/users/usersModules";
import { AuthDto } from "./dtos/authDTO";
import { getUserByEmail } from "@modules/users/usersService";

export const validateAuth = async (authdto: AuthDto): Promise<UserModeles> => {
    const user = await getUserByEmail(authdto.email);

    return user;
};
