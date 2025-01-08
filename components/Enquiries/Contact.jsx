'use client';
import { useState, useEffect } from 'react';


const Contact = () => {


    const [contactForm, setContactForm] = useState({});
    const [messageSent, setMessageSent] = useState(false);
    const [touched, setTouched] = useState({});


    const onBlur = ({target}) => setTouched((prevTouched) => ({...prevTouched, 
        [target.name]: true
    }))

    const handleChange = (e) => {
        const valueName = e.target.name;
        const value = e.target.value; 

        setContactForm((prevContactForm) => ({
            ...prevContactForm,
            [valueName]: value,
            
        }))
        console.log(contactForm);
    }

  return (
    <div className='w-full p-8 flex justify-center flex-col gap-8 items-center'>
        <h2 className='lg:text-4xl md:text-3xl text-3xl font-bold tracking-widest mb-10'>CONTACT</h2>
        <div>
            <form className='flex flex-col gap-8 items-center'>
                <input type='text' placeholder='Name' name='name' className={`p-3 lg:w-96 md:w-96 w-72 rounded-lg border ${touched.name && !contactForm.name ? 'border-red-300 border-2 focus:border-red-300' : 'border-gray-300 focus:border-gray-600 '} text-xs lg:text-base md:text-sm peer`} onChange={handleChange} onBlur={onBlur}/>


                <input type='text' placeholder='Subject' name='subject' className='p-3 lg:w-96 md:w-96 w-72 rounded-lg border border-gray-300 focus:border-gray-600 text-xs lg:text-base md:text-sm' onChange={handleChange} />

                <input type='email' placeholder='Email' name='email' className={`p-3 lg:w-96 md:w-96 w-72 rounded-lg border ${touched.email && !contactForm.email ? 'border-red-300 border-2 focus:border-red-300' : 'border-gray-300 focus:border-gray-600 '} text-xs lg:text-base md:text-sm peer`} onChange={handleChange} onBlur={onBlur} />


                <textarea placeholder='Message' name='message' className='p-3 lg:w-96 md:w-96 w-72 rounded-lg border border-gray-300 focus:border-gray-600 required invalid:border-red-300 focus:invalid:border-red-600 resize-none text-xs lg:text-base md:text-sm' onChange={handleChange} />

                <button type='submit' className='p-3 lg:w-96 md:w-96 w-72 rounded-lg bg-gray-600 text-white font-semibold tracking-widest hover:bg-gray-800 text-sm lg:text-base md:text-sm'>SUBMIT</button>

            </form>
            <h3 className='text-base lg:text-lg md:text-base font-bold tracking-widest p-4 text-center text-gray-400'>OR EMAIL ME AT <span className='text-gray-900'>WOODZILLA.CO.UK</span></h3>
        </div>
    </div>
  )
}

export default Contact