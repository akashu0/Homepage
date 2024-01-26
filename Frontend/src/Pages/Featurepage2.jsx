import React, { useState } from 'react'
import TitleIcon from '../Components/TitleIcon'

const Featurepage2 = () => {
    const [image, setimage] = useState()
    const handleOnError = (e) => {
        console.error("Image loading failed:", e);
        e.target.src =
            "/default.jpg";
    }
    return (
        <div className=' w-full flex items-center   '>

            <div className=' '>
                <img src="https://landing-page-gan4.onrender.com/images/people-01.png" onError={handleOnError} alt="No Image Found" className=' h-screen' />
            </div>

            <div className='w-1/2 pl-28'>
                <h1 className='text-TextBlue text-4xl font- font-Roboto'> Design & Build Your Own Landing Pages </h1>
                <p className='pt-2 text-gray-700 '>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus
                    mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.</p>

                <div className='pt-5 w-full grid grid-flow-row grid-cols-2  gap-x-3 gap-y-6'>

                    <div>
                        <TitleIcon />
                        <h1 className='pt-3 text-TextBlue text-xl font- font-Roboto'> Title Goes Here </h1>
                        <p className='text-xs'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. </p>
                    </div>


                </div>


            </div>


        </div>
    )
}

export default Featurepage2