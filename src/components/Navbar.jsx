import React from 'react'
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import LOGO from '../assets/logo-no-background.png'

const Navbar = () => {

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
        <div className="p-4 dark:bg-gray-800 dark:text-gray-100">
            <div className="container flex justify-between h-16 mx-auto md:justify-center md:space-x-8">
                <ul className="items-stretch hidden space-x-3 md:flex">
                    <li className="flex">
                        <button onClick={scrollToTimeline} className="flex items-center px-4 -mb-1 border-b-2 dark:border-transparent">Timeline</button>
                    </li>
                    <li className="flex">
                        <button onClick={scrollToMySkill} className="flex items-center px-4 -mb-1 border-b-2 dark:border-transparent">My Skills</button>
                    </li>
                    <li className="flex">
                        <button onClick={scrollToAbout} className="flex items-center px-4 -mb-1 border-b-2 dark:border-transparent dark:text-violet-400 dark:border-violet-400">About</button>
                    </li>
                </ul>
                <img src={LOGO} alt='logo' />
                <ul className="items-stretch hidden space-x-3 md:flex">
                    <li className="flex">
                        <a rel="noopener noreferrer" href="#" className="flex items-center px-4 -mb-1 border-b-2 dark:border-transparent"><FaInstagram /></a>
                    </li>
                    <li className="flex">
                        <a rel="noopener noreferrer" href="#" className="flex items-center px-4 -mb-1 border-b-2 dark:border-transparent"><FaLinkedinIn /></a>
                    </li>
                    <li className="flex">
                        <a rel="noopener noreferrer" href="#" className="flex items-center px-4 -mb-1 border-b-2 dark:border-transparent"><SiGmail /></a>
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