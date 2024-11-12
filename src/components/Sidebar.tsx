"use client"

import React from 'react'
import { RiHomeFill } from "react-icons/ri";
import { IoMdPersonAdd } from "react-icons/io";
import { MdManageAccounts } from "react-icons/md";
import Link from 'next/link';
import { usePathname } from 'next/navigation'

const Sidebar = () => {

    const pathname = usePathname()

    return (
    <div className='text-black bg-gray-100 shadow-sm h-screen w-[20%] text-sm z-10'>
      <ul className='flex flex-col mt-7'>
            <Link href={'/'}>
                <li className={`hover:bg-gray-200 py-3 flex pl-[4em] items-center gap-2 text-bold cursor-pointer ${pathname ==='/' && 'bg-black border-l-4 hover:bg-gray-800 text-white border-yellow-400'}`}>
                <RiHomeFill/>Home</li>
            </Link>
            
            <Link href={'/adduser'}>
                <li className={`hover:bg-gray-200 py-3 flex pl-[4em] items-center gap-2 text-bold cursor-pointer ${pathname ==='/adduser' && 'bg-black border-l-4 hover:bg-gray-800 text-white border-yellow-400'}`}>
                <IoMdPersonAdd/>Add User</li>
            </Link>
            <Link href={'/manageuser'}>
                <li className={`hover:bg-gray-200 py-3 flex pl-[4em] items-center gap-2 text-bold cursor-pointer ${pathname ==='/manageuser' && 'bg-black border-l-4 hover:bg-gray-800 text-white border-yellow-400'}`}>
                <MdManageAccounts/>Manage User</li>
            </Link>
      </ul>
    </div>
  )
}

export default Sidebar
