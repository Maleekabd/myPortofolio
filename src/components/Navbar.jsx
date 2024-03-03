import React, { useEffect, useState } from 'react'
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import LOGO from '../assets/logo-no-background.png'
import { Link } from 'react-router-dom';
import { IoLogoTiktok } from "react-icons/io5";



const Navbar = () => {

    const [prevScroll, setPrevScroll] = useState(0);
    const [visible, setVisible] = useState(true)

    useEffect(() => {
        const handleScroll = () => {
            const currentScroll = window.scrollY;
            setVisible(prevScroll > currentScroll || currentScroll === 0);
            setPrevScroll(currentScroll);
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    }, [prevScroll])

    const scrollToTimeline = (e) => {
        const target = document.getElementById('timeline');
        target.scrollIntoView({ behavior: 'smooth' })
    }

    const scrollToMySkill = (e) => {
        const target = document.getElementById('myskills')
        target.scrollIntoView({ behavior: 'smooth' })
    }

    const scrollToAbout = (e) => {
        const target = document.getElementById('target')
        target.scrollIntoView({ behavior: 'smooth' })
    }

    return (
        <div id='header' className={visible ? `Visible z-50 p-4 dark:bg-gray-800 dark:text-gray-100` : `Hidden`}>
            <div className="container flex justify-between h-16 mx-auto md:justify-center md:space-x-8">
                <ul className="items-stretch hidden space-x-3 md:flex">
                    <li className="flex">
                        <Link to={'https://scytale-of-sparta-chi.vercel.app/'} target='_blank' className='hover:text-violet-400 flex items-center px-4 -mb-1 border-b-2 dark:border-transparent'>
                            <button className="">My Blog</button>
                        </Link>
                    </li>
                    <li className="flex">
                        <button onClick={scrollToTimeline} className="hover:text-violet-400 flex items-center px-4 -mb-1 border-b-2 dark:border-transparent">Timeline</button>
                    </li>
                    <li className="flex">
                        <button onClick={scrollToMySkill} className="hover:text-violet-400 flex items-center px-4 -mb-1 border-b-2 dark:border-transparent">My Skills</button>
                    </li>
                    <li className="flex">
                        <button onClick={scrollToAbout} className="hover:text-violet-400 flex items-center px-4 -mb-1 border-b-2 dark:border-transparent dark:text-violet-400 dark:border-violet-400">About</button>
                    </li>
                </ul>
                <div className="flex items-center">
                    <img src={LOGO} alt='logo' className='h-10 w-20' />
                </div>
                <ul className="items-stretch hidden space-x-3 md:flex">
                    <li className="flex">
                        <a rel="noopener noreferrer" href="https://www.instagram.com/__malikabd" target='_blank' className="hover:text-violet-400 flex items-center px-4 -mb-1 border-b-2 dark:border-transparent"><FaInstagram /></a>
                    </li>
                    <li className="flex">
                        <a rel="noopener noreferrer" href="https://www.linkedin.com/in/malik-abdurrasyid" target='_blank' className="hover:text-violet-400 flex items-center px-4 -mb-1 border-b-2 dark:border-transparent"><FaLinkedinIn /></a>
                    </li>
                    <li className="flex">
                        <a rel="noopener noreferrer" href="https://mail.google.com/mail/u/0/#inbox?compose=new" target='_blank' className="hover:text-violet-400 flex items-center px-4 -mb-1 border-b-2 dark:border-transparent"><SiGmail /></a>
                    </li>
                    <li className="flex">
                        <a rel="noopener noreferrer" href="https://www.tiktok.com/@__malikabd" target='_blank' className="hover:text-violet-400 flex items-center px-4 -mb-1 border-b-2 dark:border-transparent"><IoLogoTiktok /></a>
                    </li>
                </ul>
                <button title="Button" type="button" className="p-4 md:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 dark:text-gray-100">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                    </svg>
                </button>
            </div>
        </div>
    )
}

export default Navbar;