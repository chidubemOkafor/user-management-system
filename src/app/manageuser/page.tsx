"use client"

import SearchUser from '@/components/SearchUser'
import UserContainer from '@/components/UserContainer'
import React, { useState } from 'react'
import ModifyUser from '@/components/ModifyUser'
import { fetchInitialUsers } from '../../../utils/fetchUser'
import { User } from '../../../data/Users'


const page: React.FC = () => {
  const [toggleEdit, setToggleEdit] = useState<boolean>(false)
  const [id, setId] = useState<number>()
  const [users, setUsers] = useState<User[]>(fetchInitialUsers());
  return (
    <>
      {toggleEdit && 
        <div className='bg-black bg-opacity-50 w-[100%] fixed h-[100%] top-0 z-20 flex justify-center items-center'>
          <ModifyUser 
          setToggleEdit = {setToggleEdit} 
          id={id}
          setUsers = {setUsers} 
          />
        </div>
      }
      <div className="w-[100%] px-5 pt-5 flex flex-col gap-5">
      <SearchUser/>
      <UserContainer 
        setToggleEdit = {setToggleEdit} 
        setId = {setId} 
        setUsers = {setUsers} 
        users = {users}
        />
    </div>
  </>
  )
}

export default page
