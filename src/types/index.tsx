import { ReactNode } from "react"

export interface IUserData {
    name: string,
    email: string
}

export interface IUserLogin {
    email: string,
    password: string
}

export interface IProviderProps {
    children: ReactNode
}

