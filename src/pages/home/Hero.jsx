import React from 'react'
import Anjing from '../../assets/anjing.gif'
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa'
import { Link } from 'react-router-dom'

function Hero() {
    return (
        <section class="text-gray-200 body-font h-screen flex">
            <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                    <h2 className='text-2xl mb-4'>Hello, <span className='text-thrid'>I'm</span></h2>
                    <h1 class="title-font text-6xl mb-4 font-bold">M Bais Yufan Mardiansah
                    </h1>
                    <h2 className='text-2xl mb-4 text-thrid'>I'm a Frontend Developer</h2>
                    <p class="mb-8 leading-relaxed text-xl w-1/2"> I am committed to learning new technologies and thrive in both team settings and individual work environments, with a quick adaptability to new challenges and environments.                    </p>
                    <div class="flex justify-center mb-4">
                        <button class="inline-flex text-white bg-gradient-to-r from-thtext-thrid to-[#0D92AF] border-0 focus:outline-none rounded text-xl p-2">let's connect</button>
                    </div>
                    <div className='flex gap-4 items-center'>
                        <p className='text-xl'>Contact me at</p>
                        <span class="sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start gap-4 flex items-center mx-4">
                            <div className="flex items-center rounded-full w-10 h-10 justify-center bg-thtext-thrid">
                                <Link to="https://www.facebook.com/bais.yufan.1" className="text-2xl"><FaFacebook /></Link>
                            </div>
                            <div className="flex items-center rounded-full w-10 h-10 justify-center bg-thtext-thrid">
                                <Link to="https://www.instagram.com/hi_basss" className="text-2xl"><FaInstagram /></Link>
                            </div>
                            <div className="flex items-center rounded-full w-10 h-10 justify-center bg-thtext-thrid">
                                <Link to="https://www.linkedin.com/in/m-bais-yufan-mardiansah-5b85b52a3/" className="text-2xl"><FaLinkedin /></Link>
                            </div>
                        </span>
                    </div>
                </div>
                <div class="lg:max-w-lg lg:w-full   ">
                    <img class="object-cover object-center rounded w-[450px]" alt="hero" src={Anjing} />
                </div>
            </div>
        </section>
    )
}

export default Hero