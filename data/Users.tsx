import { Role } from "@/hook/UserInput";
import { State } from "@/hook/UserInput";

export type User = {
    id: number,
    profileImage: string,
    username: string,
    email: string,
    role: Role,
    status: State
}

const active = State.active
const inactive = State.inactive

const admin = Role.admin
const user = Role.user


export const initialUsers: User[] = [
    {
        id: 1, 
        profileImage: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=600", 
        username: 'john_doe', 
        email: 'john@example.com', 
        role: admin, 
        status: active 
    },
    {
        id: 2, 
        profileImage: "https://images.pexels.com/photos/1542085/pexels-photo-1542085.jpeg?auto=compress&cs=tinysrgb&w=600", 
        username: 'jane_doe', 
        email: 'jane@example.com', 
        role: user, 
        status: inactive 
    },
    {
        id: 3, 
        profileImage: "https://images.pexels.com/photos/697509/pexels-photo-697509.jpeg?auto=compress&cs=tinysrgb&w=600", 
        username: 'sam_smith', 
        email: 'sam@example.com', 
        role: user, 
        status: active 
    },
    {
        id: 4, 
        profileImage: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=600", 
        username: 'john_doe', 
        email: 'john@example.com', 
        role: admin, 
        status: active
    },
];

export { State };
