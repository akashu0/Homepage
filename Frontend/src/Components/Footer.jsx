import React from 'react'
import { FaFacebook, FaLinkedin, FaYoutube, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
    const navlink = ["Home", 'About', "Contact"]
    return (
        <div className='w-full bg-LightBlue md:px-32'>
            <div className='py-10 border-b-2 flex md:flex-row flex-col gap-2 md:gap-0 items-center justify-between'>

                <p className='text-xs text-gray-500'>©2023 Yourcompany</p>
                <div className=' text-TextBlue text-3xl font-bold  '>Landing</div>
                <button className='w-[150px] h-7 bg-midnight text-white text-xs' >Buy Now</button>
            </div>

            <div className='py-5 flex justify-between items-center'>

                <div className='w-[300px] flex justify-between items-center'> {navlink.map((value, key) => {
                    return (
                        <span key={key} className='text-TextBlue'>{value}</span>
                    )
                })} </div>

                <div className='flex gap-2 text-TextBlue'>
                    <FaFacebook /> <FaLinkedin /> <FaYoutube /> <FaInstagram /> < FaTwitter />
                </div>



            </div>

        </div>
    )
}

export default Footer