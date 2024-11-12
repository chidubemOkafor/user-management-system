"use client"

import React from 'react'
import Navbar from './Navbar'
import Sidebar from './Sidebar'

import { useState, useEffect } from 'react';

const SideAndNavbar = ({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) => {
    const [isSidebarVisible, setIsSidebarVisible] = useState(window.innerWidth >= 791);

    useEffect(() => {
        const handleResize = () => {
            setIsSidebarVisible(window.innerWidth >= 791);
        };

        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <div>
            <Navbar />
            <div className="flex">
                {isSidebarVisible && <Sidebar />}
                {children}
            </div>
        </div>
    );
};

export default SideAndNavbar;

