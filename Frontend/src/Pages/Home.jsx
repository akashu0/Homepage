import React from 'react'
import Navbar from '../Components/Navbar'
import HomepageSvg from '../Components/HomepageSvg'
import About from '../Components/About'
import BottomSide from '../Components/BottomSide'
import Footer from '../Components/Footer'

const Home = () => {
  return (
    <>
      <Navbar />
      <div className='body relative w-screen overflow-x-hidden'>

        <div className=' absolute md:top-0  top-12 md:right-0 -z-10'>
          <svg   className='md:w-[823px] md:h-[812px] w-[523px] h-[750px]'   >
            <path opacity="0.5" d="M318.635 37.6942C198.697 138.217 180.111 328.298 98.8809 468.527C70.6041 
            517.322 34.0667 560.992 15.0036 615.123C-28.7619 739.026 31.472 879.572 112.093 977.981C150.536 1024.93 195.44 1067.94 249.77 1087.72C291.55 1102.94 336.348 1103.57 380.325 1103.97L1150.79 1111.9C1236.81 1112.77 1332.39 1109.62 1394.24 1043.21C1436.87 997.478 1454.18 930.692 1468.88 866.944C1486.93 788.613 1503.3 703.546 1475.2 628.94C1443.11 543.582 1361.96 495.21 1311.55 421.555C1229.74 302.223 1231.62 121.731 1127.44 26.4664C1078.8 -17.9959 1014.62 -35.4321 952.083 -44.1502C834.184 -60.6089 722.506 -29.5408 606.725 -33.8734C507.756 -37.572 400.739 -31.1259 318.635 37.6942Z" fill="#E7ECFF" />
          </svg>
        </div>


        <div className='w-full md:flex md:pl-28 md:mt-28'>


          <div className='md:w-1/2  px-6   md:px-0'>
            <h1 className='text-TextBlue text-4xl font- font-Roboto'> Introduce Your Product Quickly & Effectively</h1>
            <span className='text-TextBlue'>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.
              Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus<br /><br />
              mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.
            </span>
            <div className='flex mt-8 gap-5'>
              <button className='bg-DarkBlue px-6 text-white text-xs  py-1'>Purchase UI Kit</button>
              <button className='text-DarkBlue text-xs border-2  px-8 py-1'>Learn More</button>
            </div>
          </div>

          <div className='md:w-1/2 md:mt-[-60px] mt-[20px] flex justify-end'>       <HomepageSvg  />      </div>

        </div>

      </div>

      <About />
      <BottomSide />

      <Footer />
    </>
  )
}

export default Home