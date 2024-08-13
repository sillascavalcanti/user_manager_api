import { AuthException } from "@exceptions/authException";
import { AuthUserDTO } from "@modules/auth/dtos/authDTO";
import { UserModeles } from "@modules/users/usersModules";
import { sign, verify } from "jsonwebtoken";

export const tokenpassword = "umasenha";

export const generateToken = (user: UserModeles): string => {
    return sign(
        {
            userid: user.id,
            email: user.email,
            typeuser: user.typeUser,
        },
        tokenpassword,
        {
            subject: String(user.id),
            expiresIn: 1000000000000,
        }
    );
};

export const verifyToken = async (autorization: string): Promise<AuthUserDTO> => {
    
    if(!autorization){
        throw new AuthException();
    }
    
    const [, token] = autorization.split(" ");
    try {
        const decodedToken = <AuthUserDTO>verify(token, tokenpassword);

        return decodedToken;
    } catch (error) {
        throw new AuthException();
    }
};
