import { createContext } from "react";

export interface User {
    id: number,
    name: string,
    age: number,
    address: string,
};

export const UserContext = createContext<User>({
    id: 0,
    name: '',
    age: 0,
    address: ''
});