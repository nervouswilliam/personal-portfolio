"use client";
import React from "react"
import Image from "next/image";
import Link from "next/link";
import { TypeAnimation } from 'react-type-animation';

const HeroSection = () => {
    return(
        <section>
            <div className="grid grid-cols-1 lg:grid-cols-12">
                <div className="col-span-7 place-self-center text-center sm:text-left">
                    <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold">
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 ">
                            Hello, I'm {" "}
                        </span>
                        <br></br>                        
                        <TypeAnimation
                            sequence={[
                                // Same substring at the start will only be typed out once, initially
                                'William',
                                1000, // wait 1s before replacing "Mice" with "Hamsters"
                                'A Frontend Engineer',
                                1000,
                                'A Backend Engineer',
                                1000,
                                'A Mobile Developer',
                                1000
                            ]}
                            wrapper="span"
                            speed={50}
                            repeat={Infinity}
                            />
                    </h1>
                    <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
                    A versatile Software Engineer with proven expertise in both full stack and mobile development. I specialize in building, testing, and deploying scalable applications from end-to-end, delivering seamless user experiences across web and mobile platforms.
                    </p>
                    <div>
                        <Link
                        href="/#contact"
                        className="px-6 inline-block py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-primary-500 to-secondary-500 hover:bg-slate-200 text-white"
                        ></Link>
                        <button className="px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 bg-white hover:bg-slate-200 text-white">
                            <Link
                            href="/#contact"
                            >
                                Hire Me
                            </Link>
                        </button>
                        <button className="px-1 py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:bg-slate-800 text-white mt-3">
                            <Link
                            href="/my-cv.docx.pdf"
                            >
                                <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
                                    Download CV
                                </span>
                            </Link>
                        </button>
                    </div>
                </div>
                <div className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] ml-20 relative">
                    <Image
                    src="/images/HeroSection.png"
                    alt="hero image"
                    className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 ml-4"
                    width={300}
                    height={300}
                    />
                </div>
            </div>
        </section>
    )
};

export default HeroSection
