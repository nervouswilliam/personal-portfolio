"use client"
import React , {useState} from 'react'
import GithubLogo from "../../../public/images/GithubLogo.png"
import linkedinLogo from "../../../public/images/LinkedinLogo.png"
import Link from 'next/link'
import Image from 'next/image'

const EmailSection = () => {
    const [emailSubmitted, setEmailSubmitted] = useState(false)
    const [isLoading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        const data = {
            email: e.target.email.value,
            subject: e.target.subject.value,
            message: e.target.message.value,
        }
        const JSONdata = JSON.stringify(data);
        const endpoint = "/api/send";

        const options = {
            method: 'POST',
            headers:{
                'Content-Type': 'application/json',
            },
            body:JSONdata,
        }
        const response = await fetch(endpoint, options);
        const resData = await response.json();
        if(response.status === 200){ 
            console.log('message sent')
            setEmailSubmitted(true);
            setLoading(false)
        }
    }
  return (
    <section className='grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative' id='contact'>
        <div className='bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-1/2'></div>
        <div className='z-10'>
            <h5 className='text-xl font-bold text-white my-2'>
                Let&apos;s Connect
            </h5>
            <p className='text-[#ADB7BE] mb-4 max-w-md'>
                {" "}
                I&apos;m currently looking for new opportunities, my inbox is always
                open. Whether you have a question or just want to say hi, I&apos;ll
                try my best to get back to you!
            </p>
            <div className='socials flex flex-row gap-2 items-center'>
                <Link href="https://github.com/nervouswilliam">
                    <Image 
                    src={GithubLogo} 
                    alt='Github Logo'
                    width={50}
                    height={50}/>
                </Link>
                <Link href="https://www.linkedin.com/in/jeremiah-william-sebastian-5ab68b117">
                    <Image 
                    src={linkedinLogo} 
                    alt='Linkedin Logo'
                    width={100}
                    height={100}/>
                </Link>
            </div>
        </div>
        <div>
            <form className="flex flex-col" onSubmit={handleSubmit}>
                <div className='mb-6'>
                    <label 
                    htmlFor='email' 
                    className='text-white block mb-2 text-sm font-medium'>
                        Your Email
                    </label>
                    <input
                    name='email' 
                    type='email' 
                    id='email' 
                    required 
                    className='bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5' 
                    placeholder='qwerty@gmail.com'/>
                </div>

                <div className='mb-6'>
                    <label 
                    htmlFor='subject' 
                    className='text-white block mb-2 text-sm font-medium'>
                        Subject
                    </label>
                    <input 
                    name='subject'
                    type='text' 
                    id='subject' 
                    required 
                    className='bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5' 
                    placeholder='Just Saying Hi'/>
                </div>
                <div className='mb-6'>
                    <label
                    htmlFor='message'
                    className='text-white block text-sm mb-2 font-medium'>
                        Message
                    </label>
                    <textarea
                    name='message'
                    id='message'
                    className='bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5'
                    placeholder="Let's talk about..."/>
                </div>
                <button
                type='submit'
                className='bg-purple-500 hover:bg-purple-600 text-white font-medium py-2.5 px-5 rounded-lg w-full'
                disabled={isLoading}>
                    {isLoading ? (
                        <svg
                        className='animate-spin h-5 w-5 text-white'
                        xmlns='http://www.w3.org/2000/svg'
                        fill='none'
                        viewBox='0 0 24 24'
                        >
                            <circle
                            className='opacity-25'
                            cx='12'
                            cy='12'
                            r='10'
                            stroke='currentColor'
                            strokeWidth='4'
                            />
                            <path
                            className='opacity-75'
                            fill='currentColor'
                            d='M4 12a8 8 0 018-8v8H4z'
                            />
                        </svg>
                    ) : (
                        'Send Message'
                    )}
                </button>
                {
                    emailSubmitted && (
                        <p className='text-green-500 text-sm mt-2'>
                            Email Sent Successfully!
                        </p>
                    )
                }
            </form>
        </div>
    </section>
  )
}

export default EmailSection