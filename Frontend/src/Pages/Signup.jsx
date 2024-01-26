import React, { useState, useEffect } from 'react'
import axios from "axios"
import axiosInstanceUser from '../Services/AxiosInstance';
import { Link, useNavigate } from "react-router-dom";
import useCheckName, { usecheckEmail, useCheckPassword, useRepasswordcheck } from '../Utils/Signup_Validation' //custom Hooks
import { FcApproval } from "react-icons/fc";

function Signup() {
    const navigate = useNavigate()

    const [signup, setSignup] = useState({
        name: "",
        email: "",
        password: "",
        RePassword: ""
    });

    const checkNameValidation = useCheckName("")
    const checkEmailValidation = usecheckEmail("")
    const checkPasswordValidation = useCheckPassword("")
    const checkRePasswordValidation = useRepasswordcheck("")

    const { NameError } = checkNameValidation
    const { EmailError } = checkEmailValidation
    const { PasswordError } = checkPasswordValidation
    const { RePasswordError } = checkRePasswordValidation


    const handleSubmit = async (event) => {
        event.preventDefault()

        await axiosInstanceUser.post("/Signup", signup).then((res) => {
            console.log("success");
            console.log(res);
            if (res.data.status === 'success') {
                navigate("/login")
            }
        });
    };





    return (

        <section className="h-auto md:py-[60px] mx-5  flex items-center justify-center 
                            md:mx-12
                            xl:mx-[150px]">



            <div className=' h-[475px] bg-DarkBlue rounded-md  shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px]
                            md:flex  md:h-[525px] 
                            lg:flex'>
                <div className=' h-[460px]   bg-white 
                            md:flex md:h-[510px]
                            lg:flex
                    '>


                    {/* Login Sectin right side */}
                    <div className='w-full  h-full  flex items-center 
                                    md:w-1/2 md:flex md:items-center
                                    lg:w-1/2 '>
                        <form action="" method="post" className='  h-3/4   md:border-l-[1px] flex flex-col  items-center 
                                        md:px-7'>

                            <h1 className='text-[17px] mt-[18px]'>Welcome user! Create your Account</h1>

                            <div className='flex items-center justify-start md:w-[330px]'>
                                <input className=' my-2  w-[230px] md:w-[300px] h-[50px] border-b-[1px] focus:outline-none'
                                    placeholder='Email '
                                    type="email"
                                    name='email'
                                    //  onBlur={()=>checkEmailValidation.checkEmail(signup.email)}
                                    onChange={(e) => setSignup({ ...signup, email: e.target.value })} />

                                <FcApproval className={`w-5 h-5 transition-opacity duration-1000 ${!checkEmailValidation.EmailError ? 'opacity-0 ' : 'opacity-100'}`} />

                            </div>

                            <div className='flex items-center justify-start md:w-[330px]'>
                                <input className=' my-2  w-[230px] md:w-[300px] h-[50px] border-b-[1px] focus:outline-none'
                                    placeholder='Name'
                                    type="text"
                                    name='name'
                                    onBlur={() => checkNameValidation.check(signup.name)}
                                    onChange={(e) => setSignup({ ...signup, name: e.target.value })} />

                                <FcApproval className={`w-5 h-5  transition-all duration-1000 ${!checkNameValidation.NameError ? 'opacity-0 ' : 'opacity-100'}`} />
                            </div>

                            <div className='flex items-center justify-start md:w-[330px]'>
                                <input className=' my-2  w-[230px] md:w-[300px] h-[50px] border-b-[1px] focus:outline-none'
                                    placeholder='Password'
                                    type="password"
                                    name="password"
                                    onBlur={() => checkPasswordValidation.check(signup.password)}
                                    onChange={(e) => setSignup({ ...signup, password: e.target.value })} />

                                <FcApproval className={`w-5 h-5  transition-all duration-1000 ${!checkPasswordValidation.PasswordError ? 'opacity-0 ' : 'opacity-100'}`} />
                            </div>

                            <div className='flex items-center justify-start md:w-[330px]'>
                                <input className=' my-2  w-[230px] md:w-[300px] h-[50px] border-b-[1px] focus:outline-none'
                                    placeholder='Retype Password'
                                    name="Retype Password"
                                    type="password"
                                    onBlur={() => checkRePasswordValidation.check(signup.password, signup.RePassword)}
                                    onChange={(e) => setSignup({ ...signup, RePassword: e.target.value })} />

                                <FcApproval className={`w-5 h-5  transition-all duration-1000 ${!checkRePasswordValidation.RePasswordError ? 'opacity-0 ' : 'opacity-100'}`} />

                            </div>


                            <div className='flex h-[50px] w-full mt-6 items-center justify-center '>


                                <button className={`rounded-[4px] ml-4 transition-colors duration-700 font-medium w-[120px] ${NameError && PasswordError && RePasswordError ? "border-lightgreen text-lightgreen " : "border-gray-400   text-gray-400"} border-2 h-8`} onClick={handleSubmit}> SIGNUP</button>

                            </div>

                            <div className='md:mt-3'>
                                <span className='text-[13px]'> Already have an account  </span>
                                <Link to="/login">
                                    <button className={`rounded-[4px] w-[100px] mt-3 text-white md:w-[120px]  bg-DarkBlue h-6`} > LOGIN</button>
                                </Link>
                            </div>

                        </form>
                    </div>

                </div>

            </div>
        </section>
    )
}

export default Signup