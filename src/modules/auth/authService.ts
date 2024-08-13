import { UserModeles } from "@modules/users/usersModules";
import { AuthDto } from "./dtos/authDTO";
import { getUserByEmail } from "@modules/users/usersService";
import { validatePassword } from "@utils/passwordUtils";
import { NotFoundExeception } from "@exceptions/notFoundException";

export const validateAuth = async (authdto: AuthDto): Promise<UserModeles> => {
    const user = await getUserByEmail(authdto.email);

    const passwordValidation = await validatePassword(
        authdto.password,
        user.password
    );

    if (!passwordValidation) {
        throw new NotFoundExeception("user");
    }
    return user;
};
