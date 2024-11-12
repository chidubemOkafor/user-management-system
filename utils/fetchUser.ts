import { initialUsers } from "../data/Users";

export const fetchInitialUsers = () => {

        const fetchUser = localStorage.getItem("Users")
        if(!fetchUser) {
            return initialUsers;
        } else {
            const parsedUser = JSON.parse(fetchUser)
            return [...initialUsers, ...parsedUser]
        }

}


export const FetchUserWithId = (id: number) => {
    const fetchUser = localStorage.getItem("Users");
    
    const user = initialUsers.find(user => user.id === id);
    
    if (user) {
        return user;
    } else if (fetchUser) {
        const users = JSON.parse(fetchUser);
        const userData = users.find((user: { id: number }) => user.id === id);
        
        if (userData) {
            return userData;
        }
    }
    throw { message: "User cannot be found" };
};
