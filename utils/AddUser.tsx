import { UserInput, Role } from "@/hook/UserInput";
import { initialUsers, User, State } from "../data/Users";

export const AddUser = () => {
    type userType = {
        role: Role,
        image: string,
        state: State,
        email: string,
        username: string
    }

    const addUser = ({ role, image, state, email, username }: userType) => {

        console.log("username: ", username)

        const users = localStorage.getItem("Users");

        let userId;

        if (!users) {
            userId = initialUsers.length;
        } else {
            const parsedUsers = JSON.parse(users);
            userId = parsedUsers.length !== 0 ? parsedUsers[parsedUsers.length - 1].id: initialUsers.length;

        }

        const parsedUsers = users ? JSON.parse(users) : []

        const emailExists = parsedUsers.some((user: { email: string; }) => user.email === email);
        if (emailExists) {
            throw {message: "A user with this email already exists.", status: 409};
        }

        if (username === "" || image === "" || state === undefined || role === undefined) {
            throw {message: "incomplete credentials", status: 300}
        }
        
        const newUser = {
            id: userId + 1,
            profileImage: image,
            username,
            email,
            role,
            status: state,
        } as User;

        const updatedUsers = [...parsedUsers, newUser];
        localStorage.setItem("Users", JSON.stringify(updatedUsers));
        return true
    };

    return {
        addUser,
    };
};
