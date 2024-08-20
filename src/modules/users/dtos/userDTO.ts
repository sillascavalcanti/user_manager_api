export interface UserDTO {
    name: string;
    email: string;
    cpf: string;
    phone: string;
    password: string;
    typeUser: number;
}

export interface UserEditePasswordDTO {
    id: string;
    password: string;
}
