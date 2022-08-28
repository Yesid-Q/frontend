import { IUser } from "./user.interface"

export interface Login {
    email: string,
    password: string
}

export interface Register {
    name: string,
    email: string,
    password: string,
    veryPassword: string
}

export interface ResponseLogin {
    loginUser: IUser
}

export interface ResponseRegister {
    registerUser: IUser
}