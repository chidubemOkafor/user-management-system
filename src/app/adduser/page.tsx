"use client"

import React, { useEffect, useRef, useState } from 'react'
import { PiEyeClosedLight, PiEye } from "react-icons/pi";
import { UseInputFocus } from '@/hook/UserInputFocus';
import { UserInput, Role, State } from '@/hook/UserInput';
import { IoMdArrowDropdown } from "react-icons/io";
import Link from 'next/link';
import UploadPic from '@/components/UploadPic';
import { ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import { initialUsers, User } from '../../../data/Users';
import { AddUser } from '../../../utils/AddUser';
import {Ntype, UseNotification } from '../../../utils/Notification';

const page: React.FC = () => {
    const { addUser } = AddUser()
    const [ isOpen, setIsOpen ] = useState(false)
    const { handleNotification } = UseNotification()

    const handleState = (e: React.ChangeEvent<HTMLInputElement>) => {
        setState(e.target.value as State);
    };

    const {
        role,
        image,
        setImage,
        setRole,
        setState,
        state,
        email, 
        setEmail,      
        username,
        setUsername,
    } = UserInput()

    const { 
        emailFocus, 
        usernameFocus, 
        handleFocus, 
        handleBlur, 
    } = UseInputFocus()

    const handleSubmit = (e: { preventDefault: () => void }) => {
        e.preventDefault();
        try {
            console.log(username)
            const adduser = addUser({
                role: role as Role, 
                image: image as string, 
                state: state as State, 
                email, 
                username
            })
            if(adduser) {
                handleNotification({
                    type: Ntype.success,
                    message: "user successfully added"
                })
            }

        } catch(error: any) {
            if(error.status === 409) {
                handleNotification({
                    type: Ntype.error,
                    message: error.message
                })
            }
            else if (error.status === 300) {
                handleNotification({
                    type: Ntype.error,
                    message: error.message
                })
            }

            console.error(error)
        }
    };

 

  return (
    <div className="text-black w-screen items-center justify-center flex flex-col h-screen">
      <div className="text-center sm:w-[25em] w-[80%] flex flex-col gap-2">
        <h1 className="font-bold text-2xl">Add a new user</h1>

        <form className="flex flex-col gap-1 relative" onSubmit={handleSubmit}>
          <div className="relative pb-3">
            <input
              type="text"
              name="username"
              className="outline-none h-12 w-full rounded-md border-gray-300 border-[1px] pl-3"
              value={username}
              onFocus={handleFocus}
              onBlur={handleBlur}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
            <label
              className={`bg-white absolute left-3 pointer-events-none transition-all duration-200 
                ${usernameFocus ? 'top-[-8px] text-xs text-gray-500' : 'top-[0.8em] text-base text-gray-400'}`}
            >
              Username
            </label>
          </div>

          <div className="relative pb-3">
            <input
              type="email"
              name="email"
              className="outline-none h-12 w-full rounded-md border-gray-300 border-[1px] pl-3"
              value={email}
              onFocus={handleFocus}
              onBlur={handleBlur}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <label
              className={`bg-white absolute left-3 pointer-events-none transition-all duration-200 
                ${emailFocus ? 'top-[-8px] text-xs text-gray-500' : 'top-[0.8em] text-base text-gray-400'}`}
            >
              Email address
            </label>
          </div>

            <div className="relative">
            <div
                onClick={() => setIsOpen(!isOpen)}
                className="w-full h-12 px-4 flex items-center cursor-pointer bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none text-left"
            >
                <p className={`${role  != "Admin" as Role && role !=  "User" as Role && "text-gray-500"}`}>{role === undefined ? "select a role" : role}</p>
                <IoMdArrowDropdown className="absolute right-4" />
            </div>
            <div
                className={`absolute z-10 w-full bg-white border border-gray-300 rounded-md mt-1 shadow-lg transform transition-all duration-300 origin-top ${
                isOpen ? "scale-y-100 opacity-100" : "scale-y-0 opacity-0"
                }`}
            >
            <div onClick={() => { setRole("admin" as Role); setIsOpen(false); }} className="block w-full px-4 py-2 text-left hover:bg-gray-100">
                Admin
            </div>
            <div onClick={() => { setRole("user" as Role); setIsOpen(false);}} className="block w-full px-4 py-2 text-left hover:bg-gray-100">
                User
            </div>
            </div>
            </div>
            <UploadPic className="mt-3" image={image} setImage = {setImage}/>
            <div className="flex items-start gap-5">
            <label className="">
                <input
                type="radio"
                name="role"
                value="active"
                checked={state === "active"}
                onChange={handleState}
                required
                />
                Active
            </label>
            <label>
                <input
                type="radio"
                name="role"
                value="inactive"
                checked={state === "inactive"}
                onChange={handleState}
                required
                />
                Inactive
            </label>
            </div>
            <button type="submit" className="bg-black text-white rounded-md py-2">
            Add User
          </button>
        </form>
        <ToastContainer/>
      </div>
    </div>
  )
}

export default page