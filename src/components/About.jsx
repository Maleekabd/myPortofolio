// import React from 'react'
// import FOTO from '../assets/foto.png'
// import { Link } from 'react-router-dom'
// import BackButton from '../elements/BackButton';

// const About = () => {

//     const scrollToTop = () => {
//         const target = document.getElementById('aboutme')
//         target.scrollIntoView({ behavior: 'smooth' })
//     }

//     return (
//         <>
//             <section className="z-10 h-auto dark:bg-gray-800 dark:text-gray-100">
//                 <div className="container flex flex-col items-center justify-center p-4 mx-auto space-y-8 sm:p-10">
//                     <h1 className="text-4xl font-bold leadi text-center sm:text-5xl">Hi There!</h1>
//                     <p className="max-w-2xl dark:text-gray-400 text-justify">Hello! I am Malik Abdurrasyid, a graduate in Electrical Engineering - majoring in multimedia Telecommunication with a special interest in Cybersecurity, Computer Network, Quantum Software Development, and Frontend Web using React</p>
//                     <div className="flex flex-row flex-wrap-reverse justify-center">
//                         <div className="flex flex-col justify-center m-8 text-center">
//                             <img alt="" className="self-center flex-shrink-0 w-36 h-36 mb-4 bg-center bg-cover rounded-full dark:bg-gray-500" src={FOTO} />
//                             <p className="text-xl font-semibold">Malik Abdurrasyid</p>
//                             <p className="dark:text-gray-400">Fresh Graduate Telecommunication Engineering</p>
//                             <Link to={`/about`}>
//                                 <button onClick={scrollToTop} className='hover:bg-violet-200 bg-violet-400 m-2 p-2 rounded-md shadow-sm w-full'>See more</button>
//                             </Link>
//                         </div>
//                     </div>
//                 </div>
//             </section>
//         </>
//     )
// }

// export default About

// export const AboutMeSpec = () => {
//     return (
//         <>
//             <br id='aboutme' />
//             <section className=" dark:bg-gray-800 dark:text-gray-100">
//                 <BackButton />
//                 <div className="container flex flex-col items-center justify-center p-4 mx-auto space-y-8 sm:p-10">
//                     <h1 className="text-4xl font-bold text-center sm:text-5xl">About Me</h1>
//                     <p className="max-w-2xl text-justify dark:text-gray-400">Hello! I am Malik Abdurrasyid, a graduate in Electrical Engineering - Telecommunications with a special interest in Cyber security, quantum software development, computer network and frontend web dev using React. I enjoy reading books on various topics and exploring new technologies. With a passion for continuous learning and self-improvement, I am ready to make a meaningful contribution to the world of technology.</p>
//                     <div className="flex flex-row flex-wrap-reverse justify-center">
//                         <div className="flex flex-col justify-center m-8 text-center">
//                             <img alt="malik" className="self-center flex-shrink-0 w-24 h-24 mb-4 bg-center bg-cover rounded-full dark:bg-gray-500" src={FOTO} />
//                             <p className="text-xl font-semibold leading-6">Malik Abdurrasyid</p>
//                             <p className="dark:text-gray-400">Fresh Graduate Telecommunication Engineering</p>
//                         </div>
//                     </div>
//                 </div>
//             </section>
//         </>
//     )
// }