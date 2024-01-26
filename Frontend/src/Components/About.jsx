import React, { useEffect, useState } from 'react'
import TitleIcon from './TitleIcon'
import HomepageSvg2 from './HomepageSvg2'
import '../App.css'
import { Link } from 'react-router-dom'
import axiosInstanceUser from '../Services/AxiosInstance'
const About = () => { 
    
    const baseUrl = "https://landing-page-gan4.onrender.com/images"
    const [HomeData, setHomeData] = useState([])
    const [error, setError] = useState(false)
    const [errorMessage, seterrorMessage] = useState("")
    const [loading, setLoading] = useState(true);
    
    const handleOnError = (e) => {
        e.target.src = "/default.jpg";
    }

    useEffect(() => {
        axiosInstanceUser.get("/homeDetails").then((response) => {
            console.log(response.data);
            setHomeData(response.data)
            setLoading(false);
        }).catch((error) => {
            setHomeData([])
            setError(true)
            seterrorMessage(error.message);
            setLoading(false);

        })


    }, [])

    if (loading) {
        return <div class="flex items-center justify-center min-h-screen bg-gray-900">
        <div class="loader"></div>
                 </div>;
    }

    if (error) {
        console.log("error thrown");
        // throw new Error(errorMessage);
         return (
            <div className="error-message">
                <p>Error: {errorMessage}</p>
                {/* Add any additional error handling or messaging here */}
            </div>
        );
    }


    return (

         <div className='md:px-28 px-10 py-20 '>
            <div className='md:flex items-center justify-center'>
               
                <div className='md:w-1/2'>
                    <h1 className='text-TextBlue md:text-4xl text-4xl  font-Roboto'> Light, Fast & Powerful</h1>
                    <span className='text-TextBlue'>
                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.
                        Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus<br /><br />
                        mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.
                    </span>
                    <div className='pt-4 w-full flex mt-8 gap-5  '>
                      
                        <div className='w-1/2 h-auto '>
                            <TitleIcon />
                            <h1 className='text-xl pt-4 font-bold '>Title Goes Here</h1>
                             <h3 className='pt-2 text-gray-700'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. </h3>
                        </div>
                        <div className='w-1/2 h-auto '>
                            <TitleIcon />
                            <h1 className='text-xl pt-4 font-bold '>Title Goes Here</h1>
                            <h3 className='pt-2 text-gray-700'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. </h3>
                        </div>



                    </div>
                </div>
                <div className='md:w-1/2 w-full flex'>
                    <HomepageSvg2 />
                </div>
            </div>

            <div className='mt-20 md:px-14 flex md:flex-none flex-col justify-center items-center '>
                {HomeData.length>0 && HomeData.map((value, key) => {
                    return (
                        <Link key={key} to={value.link}>
                            <div className='w-full flex md:flex-row flex-col py-12 items-center'>
                                <div className='md:w-1/2'>
                                    <img src={`${baseUrl}/${value.img}`} onError={handleOnError} className='w-[300px]' alt="" />
                                </div>

                                <div className='md:w-1/2 '>
                                    <h1 className='text-xl pt-4 font-bold '>{value.heading}</h1>
                                    <div className='md:w-2/3'>
                                        <h3 className='pt-2  text-gray-700 text-sm'>{value.text}</h3>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    )
                })
                }

            </div>
        </div>
    
    )
}

export default About