import React, { useState, useEffect, useContext } from 'react'
import { Link, useNavigate } from "react-router-dom";
import axios from "axios"
import axiosInstanceUser from "../Services/AxiosInstance"
import { AuthContext } from '../Routes/Router';

function Login() {

    const Authcontext = useContext(AuthContext);
    const {User, setUser} = Authcontext

    const [LoginDetail, SetLoginDetail] = useState({ email: "", password: "" });
    const [email, Setemail] = useState({ email: "" })
    
    const navigate = useNavigate()


    const HandleSubmit = (event) => {
        event.preventDefault()
        console.log("LoginDetails are " + LoginDetail)

        axiosInstanceUser.post("/Login", LoginDetail)
            .then((res) => {
                console.log(res);
                console.log(res.data.email);
                const UserDetails = {
                    name: res.data.displayName,
                    email: res.data.email,
                    auth: res.data.uid,
                  };
                  setUser(UserDetails)
                
                if (res && res.data) {
                     navigate("/")
                                      }
                            
            })  .catch(err => console.log(err));


    }

    return (
        <section className="h-auto md:py-[60px] mx-5  flex items-center justify-center 
                            md:mx-12
                            xl:mx-[150px]">

            <div className=' h-[445px] bg-DarkBlue rounded-md  shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px]
                            md:flex 
                            lg:flex'>
                <div className=' h-[430px]   bg-white
                            md:flex 
                            lg:flex
                    '>
                    {/* Login Sectin Left side */}


                    {/* Login Sectin right side */}
                    <div className='mx-3  h-full  flex items-center
                                    
                                    '>
                        <form className='  h-3/4  flex flex-col  items-center 
                                        md:px-7' action="" onSubmit={HandleSubmit}>

                            {/* <img src={logo} className=' w-[70px] h-[30px] ' alt="" /> */}
                            <h1 className='text-[17px] mt-[18px]'>Welcome user! please Login to your Account</h1>

                            <input className=' mt-6 md:my-0 w-[330px] h-[50px] border-b-[1px] focus:outline-none' placeholder='Email' type="email" onChange={(e) => { SetLoginDetail({ ...LoginDetail, email: e.target.value }); }} />
                            <input className=' my-6 md:mt-5 w-[330px] h-[50px] border-b-[1px] focus:outline-none' placeholder='Password' type="password" onChange={(e) => { SetLoginDetail({ ...LoginDetail, password: e.target.value }); }} />



                            

                            <div className='mt-1 flex h-[50px] w-full  flex-row items-center justify-between
                                  md:flex md:flex-row md:h-[50px] md:w-full  md:items-center md:justify-between'>
                                <div className='flex '>
                                    <input type="checkbox" name="" id="" />
                                    <p className='ml-1'>Remenber Me</p>
                                </div>

                 

                            </div>
                            <div className='flex h-[50px] w-full mt-6 items-center justify-center '>

                                <button className='rounded-[4px] text-white w-[120px] bg-DarkBlue h-8' type="submit"  > LOGIN</button>

                                <button className='rounded-[4px] ml-4 text-lightgreen w-[120px] border-2 border-lightgreen h-8' onClick={() => navigate("/signup")} > SIGNUP</button>

                            </div>

                        </form>
                    </div>

                </div>

            </div>
        </section>
    )
}

export default Login