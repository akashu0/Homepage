import React, { useEffect, useState } from 'react'
import TitleIcon from '../Components/TitleIcon'
import axios from 'axios'


const Featurepage1 = () => {
    const [HomeData, setHomeData] = useState([])
    const handleOnError = (e) => {
        e.target.src = "/default.jpg";
    }

    useEffect(() => {
        axios.get("https://landing-page-gan4.onrender.com/ProductDetails").then((response) => {
                    setHomeData(response.data)
                    setLoading(false);
        }).catch((error) => {
                    setError(true)
                    seterrorMessage(error.message);
                    setLoading(false);
        })


    }, [])



    return (
        <div className=' w-full flex items-center justify-center p-32 pb-0 '>
            <div className='w-1/2'>
                <h1 className='text-TextBlue text-4xl font- font-Roboto'> Design & Build Your Own Landing Pages </h1>
                <p className='pt-2 text-gray-700 '>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus
                    mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.</p>

                <div className='pt-5 w-full grid grid-flow-row grid-cols-2  gap-x-3 gap-y-6'>
                    {HomeData?.map((values, key) => {
                        return (

                            <div>
                                <TitleIcon />
                                <h1 className='pt-3 text-TextBlue text-xl font- font-Roboto'>  </h1>
                                <p className='text-xs'>{values.text} </p>
                            </div>


                        )
                    })}



                </div>


            </div>

            <div className='w-1/2 flex justify-center'>
                <img src="https://landing-page-gan4.onrender.com/images/mobile-01.png" onError={handleOnError} alt="No Image Found" className='absolute bottom-0 w-[350px]' />
            </div>

        </div>
    )
}

export default Featurepage1