import React, { useState, useContext } from 'react'
import { Link } from 'react-router-dom'
import { AuthContext } from '../Routes/Router';
import axiosInstanceUser from '../Services/AxiosInstance';
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
    const [open,SetOpen] =useState(false)
    const navlink = ["Home", 'About', "Contact"]
    const Authcontext = useContext(AuthContext);
    const { User, setUser } = Authcontext

    const logout=()=>{
        axiosInstanceUser.get("/logout").then(()=>{
            setUser({ name: "", email: "", auth: "" });

        })


    }
    return (
        <div className='w-full h-[100px] px-4 md:px-20 flex justify-between items-center z-30'>

            {<GiHamburgerMenu onClick={()=>SetOpen(!open)} className={`md:hidden ${open? "rotate-90":"rotate-0"}`} />}
            
            <div className={`md:w-[300px] md:flex  justify-between items-center transition-all duration-300 md:translate-x-0 ${open? "-translate-x-24":"-translate-x-56"}`}> {navlink.map((value, key) => {
                return (
                    <div key={key} className='text-TextBlue'>{value}</div>
                )
            })} </div>
            <div className='md:absolute left-1/2 text-TextBlue md:text-3xl font-bold hidden md:block '>Landing</div>
            {User && User.name != "" ? <div className='absolute md:left-[920px] left-[180px] text-DarkBlue text-lg font-Roboto font-semibold'>Hai {User.name} </div> : <div className='absolute md:left-[850px] left-[180px] text-DarkBlue text-lg font-Roboto font-semibold'>Hai Guest </div>}

            <div className='flex flex-col md:flex-row gap-4'>

                <button className='w-[150px] h-7 bg-midnight text-white text-xs hidden md:block' >Buy Now</button>
               {User&&User.name!="" ?
                <button onClick={logout} className='w-[60px] h-7 border-2 border-DarkBlue  text-DarkBlue text-xs' >Logout</button>
               :
               <>
                <Link to="/login">
                    <button className='w-[60px] h-7 bg-midnight text-white text-xs bllocl' >Login</button>
                </Link>

                <Link to="/signup">
                <button className='w-[60px] h-7 border-2 border-DarkBlue  text-DarkBlue text-xs' >Signup</button>
                </Link>
               </>
               
               }

            </div>



        </div>
    )
}

export default Navbar