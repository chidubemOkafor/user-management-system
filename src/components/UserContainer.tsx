"use client"

import React, { Dispatch, SetStateAction, useEffect, useState } from 'react'
import Image from 'next/image';
import { BsGearFill } from "react-icons/bs";
import { MdCancel } from "react-icons/md";
import { User } from '../../data/Users';
import { Role, State } from '@/hook/UserInput';
import { fetchInitialUsers } from '../../utils/fetchUser';


interface ModifyUserProps {
    setToggleEdit: Dispatch<SetStateAction<boolean>>
    setId: Dispatch<SetStateAction<number | undefined>>
    setUsers:  Dispatch<SetStateAction<User[]>>
    users: User[]
}

const UserContainer: React.FC<ModifyUserProps> = ({
    setToggleEdit,
    setId,
    setUsers,
    users
    }) => {

    useEffect(() => {
        console.log(users)
    },[])

    const handleDelete = (id: number) => {
        const updatedUsers = users.filter(user => user.id !== id);
    
        const storedUsers = localStorage.getItem("Users");
        if (storedUsers) {
            const parsedUsers = JSON.parse(storedUsers);
            const updatedLocalStorageUsers = parsedUsers.filter((user: { id: number }) => user.id !== id);
            localStorage.setItem("Users", JSON.stringify(updatedLocalStorageUsers));
        }
    
        setUsers(updatedUsers);
    };

    const handleEdit = (id: number) => {
        setId(id)
        setToggleEdit(true)
    };

    return (
        <div className="container mx-auto">
            <div className="overflow-x-auto ">
                <table className="min-w-full bg-white">
                    <thead>
                        <tr className="w-full border-b-2 border-gray-200 bg-gray-100">
                            <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase">Name</th>
                            <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase">Role</th>
                            <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase">Status</th>
                            <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user) => (
                            <tr key={user.id} className="border-b hover:bg-gray-50">
                                <td className="px-6 text-sm text-gray-700 flex gap-2 items-center py-3">
                                    <Image src={user.profileImage} alt='profile picture' height={0} width={50} className='rounded relative h-[50px]'/>
                                    <div className='flex flex-col'>
                                        <p>{user.username}</p>
                                        <p className='text-sm text-gray-400'>{user.email}</p>  
                                    </div>
                                    
                                </td>
                                <td className="px-6 text-sm text-gray-700">
                                    <span className={`px-2 py-1 rounded-full text-xs font-semibold ${user.role === Role.admin ? 'bg-yellow-400 text-black' : 'bg-green-400 text-black'}`}>
                                        {user.role}
                                    </span>
                                </td>
                                <td className="px-6 text-sm">
                                    <span className={`px-2 py-1 rounded-full text-xs font-semibold ${user.status === State.active ? 'bg-green-100 text-green-600' : 'bg-red-100 text-red-600'}`}>
                                        {user.status}
                                    </span>
                                </td>
                                <td className="">
                                    <button
                                        onClick={() => handleEdit(user.id)}
                                        className="text-gray-500 hover:text-gray-900 flex items-center gap-1 text-sm"
                                    >
                                        <BsGearFill/>
                                        Modify user
                                    </button>
                                    <button
                                        onClick={() => handleDelete(user.id)}
                                        className="text-gray-500 hover:text-gray-900 flex items-center gap-1 text-sm"
                                    >
                                        <MdCancel/>
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default UserContainer;
