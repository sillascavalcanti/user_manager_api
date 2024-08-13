import { UserModeles } from "@modules/users/usersModules";
import { sign } from "jsonwebtoken";
export const generateToken = (user: UserModeles): string => {

    const tokenpassword = "umasenha"
    
    return sign(
        {
            userid: user.id,
            email: user.email,
            typeuser: user.typeUser
        },
        tokenpassword,
        {
            subject: String(user.id),
            expiresIn: 1000000000000,
        }
    );
};
