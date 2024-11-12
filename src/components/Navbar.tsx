import React, { useEffect, useState } from 'react'
import { LiaDashcube } from "react-icons/lia";
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Navbar = () => {
    const pathname = usePathname()
    const text = "hover:text-yellow-400 cursor-pointer px-5"

    const [isSidebarVisible, setIsSidebarVisible] = useState(window.innerWidth >= 791);

    useEffect(() => {
        const handleResize = () => {
            setIsSidebarVisible(window.innerWidth >= 791);
        };

        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    }, []);
  return (
    <div className='flex sm:flex-row flex-col bg-black border-l-4 border-yellow-400 text-white py-3 items-center px-10 fixed sm:relative w-[100%] justify-between'>
        <div className='flex items-center'>
            <LiaDashcube className='size-10'/>
            <p className='text-sm'>user management system</p>
        </div>
    { !isSidebarVisible && <ul className='flex gap-7'>
            <Link href={"/"}><li className={`${text}${pathname === '/' && 'text-yello-400'}`}>Home</li></Link>
            <Link href={'/adduser'}><li className={`${text}${pathname === '/adduser' && 'text-yello-400'}`}>Add User</li></Link>
            <Link href={'/manageuser'}><li className={`${text}${pathname === '/manageuser' && 'text-yello-400'}`}>Manage User</li></Link>   
        </ul>}
    </div>
  )
}

export default Navbar
