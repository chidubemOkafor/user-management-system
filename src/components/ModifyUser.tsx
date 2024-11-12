import React, { Dispatch, SetStateAction } from 'react'
import Image from 'next/image';
import { Role, State, UserInput } from '@/hook/UserInput';
import { IoClose } from "react-icons/io5";
import { FetchUserWithId } from '../../utils/fetchUser';
import { initialUsers, User } from '../../data/Users';
import { Ntype, UseNotification } from '../../utils/Notification';
import { ToastContainer } from 'react-toastify';

interface ModifyUserProps {
    setToggleEdit: Dispatch<SetStateAction<boolean>>
    setUsers:  Dispatch<SetStateAction<User[]>>
    id: number | undefined
}


const ModifyUser:React.FC<ModifyUserProps> = ({setToggleEdit, id, setUsers}) => {
    const userData = FetchUserWithId(id as number)
    
    const {state, setState, role, setRole, username, setUsername} = UserInput()
    const {handleNotification} = UseNotification()

    const handleChangeDetail = (e: { preventDefault: () => void }) => {
        e.preventDefault();
    
        const newUser = {
            ...userData,
            username: username === "" ? userData.username : username,
            status: state === undefined ? userData.state : state,
            role: role === undefined ? userData.role : role,
        };
    
        const doesIdExist = initialUsers.find(user => user.id === id);
    
        const users = localStorage.getItem("Users");
        const parsedUsers = users ? JSON.parse(users) : [];
    
        let newUsers: any[];
    
        if (doesIdExist) {
            const getUsers = initialUsers.filter(user => user.id !== id);
            newUsers = [...getUsers, newUser, ...parsedUsers];
            newUsers.sort((a, b) => a.id - b.id);
        } else {
            const getUsers = parsedUsers.filter((user: { id: number }) => user.id !== id);
            newUsers = [...getUsers, newUser];
            newUsers.sort((a, b) => a.id - b.id);
            localStorage.setItem("Users", JSON.stringify(newUsers));
            newUsers = [...getUsers, newUser, ...initialUsers]
            newUsers.sort((a, b) => a.id - b.id);
        }
        setUsers(newUsers);

        if(users) {
            handleNotification({
                type: Ntype.success,
                message: "changed successfully"
            })
        }
    }

    return (
    <div className='bg-white p-8 z-30 absolute text-black flex justify-center flex-col items-center rounded'>
        <IoClose className='absolute right-4 top-3 size-6 cursor-pointer' onClick={() => setToggleEdit(false)}/>
        <Image alt='profile picture' src={userData.profileImage} height = {200} width={200} className="w-[100%] h-24 object-center object-cover rounded"/>
      <form className="flex flex-col gap-5" onSubmit={handleChangeDetail}>
        <label className='text-gray-400'>
            <p className='font-bold text-gray-700'>email</p>
        <div className='rounded w-[20em] border-[1.2px] border-gray-300 pl-3 py-2 bg-gray-200'>
            {userData.email}
        </div>
        </label>
        <label className="flex flex-col">
        <p className='font-bold text-gray-700'>username</p>
            <input 
            type='text' 
            placeholder={userData.username} 
            className='rounded w-[20em] border-[1.2px] border-gray-300 pl-3 py-2 outline-none'
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            />
        </label>
        <div className="flex items-start gap-5">
            <p className="text-gray-700 font-bold">select status</p>
            <label className="">
                <input
                type="radio"
                name="status"
                value="active"
                checked={state === "active"}
                onChange={(e) => setState(e.target.value as State)}
                />
                Active
            </label>
            <label>
                <input
                type="radio"
                name="status"
                value="inactive"
                checked={state === "inactive"}
                onChange={(e) => setState(e.target.value as State)}
                />
                Inactive
            </label>
            </div>
            <div className="flex items-start gap-5">
            <p className="text-gray-700 font-bold">select role</p>
                <label className="">
                    <input
                    type="radio"
                    name="role"
                    value="admin"
                    checked={role === "admin"}
                    onChange={(e) => setRole(e.target.value as Role)}
                    />
                    Admin
                </label>
                <label>
                    <input
                    type="radio"
                    name="role"
                    value="user"
                    checked={role === "user"}
                    onChange={(e) => setRole(e.target.value as Role)}
                    />
                    User
                </label>
            </div>
            <button className="bg-black text-white py-3 hover:bg-gray-700 border-l-4 border-yellow-400 rounded" type='submit'>Save Changes</button>
      </form>
      <ToastContainer/>
    </div>
  )
}

export default ModifyUser
