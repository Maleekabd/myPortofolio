import React from 'react'
import Battleship from '../assets/battleship.jpg'

const Landingpage = () => {

    const scrollToTarget = () => {
        const target = document.getElementById('target');
        target.scrollIntoView({ behavior: 'smooth' })
    }

    return (
        <section id='top'>
            <div className="bg-sky-300 dark:bg-violet-400">
                <div className="container flex flex-col items-center px-4 py-16 pb-24 mx-auto text-center lg:pb-56 md:py-32 md:px-10 lg:px-32 dark:text-gray-900">
                    <h1 className="text-5xl font-bold leadi sm:text-6xl xl:max-w-3xl dark:text-gray-900" style={{
                        fontFamily: "PROGRESS PERSONAL USE"
                    }}>Innovating Across Horizons</h1>
                    <p className="mt-6 mb-8 text-3xl sm:mb-12 xl:max-w-3xl dark:text-gray-900 italic " style={{
                        fontFamily:"PROGRESS PERSONAL USE"
                    }}>Explore My Skills and Preferences</p>
                    <div className="flex flex-wrap justify-center">
                        <button onClick={scrollToTarget} type="button" className="px-8 py-3 m-2 text-lg font-semibold rounded dark:bg-gray-800 dark:text-gray-50 border border-black">Get started</button>
                    </div>
                </div>
            </div>
            <img src={Battleship} alt="battleship" className="w-4/6 mx-auto mb-12 -mt-20 rounded-lg shadow-md lg:-mt-40 dark:bg-gray-500" />
        </section>
    )
}

export default Landingpage;