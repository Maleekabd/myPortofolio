import React from 'react'
import f16cp from '../assets/f16cp.jpg'

const Landingpage = () => {

    const scrollToTarget = () => {
        const target = document.getElementById('target');
        target.scrollIntoView({ behavior: 'smooth' })
    }

    return (
        <section id='top' className='relative'>
            <img src={f16cp} alt="battleship" className="max-sm:hidden sm:w-full max-md:w-full max-md:h-full max-md:absolute max-md:inset-0 z-0 absolute top-0 w-full mx-auto mb-12 -mt-20 rounded-lg shadow-md lg:-mt-40 dark:bg-gray-500" />
            <div className="dark:bg-violet-400 relative z-20">
                <div className="container flex flex-col items-center px-4 py-16 pb-24 mx-auto text-center lg:pb-56 md:py-32 md:px-10 lg:px-32 dark:text-gray-900">
                    <h1 className="text-5xl font-bold leadi sm:text-6xl xl:max-w-3xl dark:text-gray-900" style={{
                        fontFamily: "PROGRESS PERSONAL USE"
                    }}>Innovating Across Horizons</h1>
                    <p className="mt-6 mb-8 text-3xl sm:mb-12 xl:max-w-3xl text-white dark:text-gray-900 italic ">Explore My Skills and Preferences</p>
                    <div className="flex flex-wrap justify-center">
                        <button onClick={scrollToTarget} type="button" className="px-8 py-3 m-2 text-lg font-semibold rounded dark:bg-gray-800 dark:text-gray-50  bg-violet-400 hover:bg-violet-200">Get started</button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Landingpage;