import { AuthException } from "@exceptions/authException";
import { AuthUserDTO } from "@modules/auth/dtos/authDTO";
import { UserModeles } from "@modules/users/usersModules";
import { sign, verify } from "jsonwebtoken";
import { json } from "stream/consumers";

export const tokenpassword = "umasenha";

export const generateToken = (user: UserModeles): string => {
    return sign(
        {
            userId: user.id,
            email: user.email,
            typeUser: user.typeUser,
        },
        tokenpassword,
        {
            subject: String(user.id),
            expiresIn: 1000000000000,
        }
    );
};

export const verifyToken = async (
    authorization: string
): Promise<AuthUserDTO> => {
    if (!authorization) {
        throw new AuthException();
    }

    const [, token] = authorization.split(" ");

    try {
        const decodedToken = <AuthUserDTO>verify(token, tokenpassword);

        return decodedToken;
    } catch (error) {
        throw new AuthException();
    }
};
