export interface UserDeleteDTO {
    id: number;
}

export interface UserInsertDTO {
    name: string;
    email: string;
    cpf: string;
    phone: string;
    password: string;
    typeUser: number;
}
