import React, { useState } from 'react'
import emailjs from 'emailjs-com'

const Contact = () => {

    const [fullName, setFullName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_1c1vd3s', 'template_g3p83sp', e.target, '18SaNWqnN-lCI4bgq')
            .then((result) => {
                console.log(result.text);
                alert('Message sent successfully!');
                setName('');
                setEmail('');
                setMessage('');
            }, (error) => {
                console.log(error.text);
                alert('Message failed to send!');
            });
    }

    return (
        <section>
            <div className="grid max-w-screen-xl grid-cols-1 gap-8 px-8 py-16 mx-auto rounded-lg md:grid-cols-2 md:px-12 lg:px-16 xl:px-32 dark:bg-gray-800 dark:text-gray-100">
                <div className="flex flex-col justify-between">
                    <div className="space-y-2">
                        <h2 className="text-4xl font-bold leadi lg:text-5xl">Let's talk!</h2>
                        <div className="dark:text-gray-400">Vivamus in nisl metus? Phasellus.</div>
                    </div>
                    <img src="assets/svg/doodle.svg" alt="" className="p-6 h-52 md:h-64" />
                </div>
                <form novalidate="" className="space-y-6" onSubmit={handleSubmit}>
                    <div>
                        <label for="name" className="text-sm">Full name</label>
                        <input id="name" type="text" placeholder="" className="border w-full p-3 rounded dark:bg-gray-800" onChange={(e) => setFullName(e.target.value)} value={fullName} />
                    </div>
                    <div>
                        <label for="email" className="text-sm">Email</label>
                        <input id="email" type="email" className="border w-full p-3 rounded dark:bg-gray-800" onChange={(e) => setEmail(e.target.value)} value={email} />
                    </div>
                    <div>
                        <label for="message" className="text-sm">Message</label>
                        <textarea id="message" rows="3" className="border w-full p-3 rounded dark:bg-gray-800" onChange={(e) => setMessage(e.target.value)} value={message}></textarea>
                    </div>
                    <button type='submit' className="border border-black w-full p-3 text-sm font-bold tracki uppercase rounded dark:bg-violet-400 dark:text-gray-900">Send Message</button>
                </form>
            </div>
        </section>
    )
}

export default Contact