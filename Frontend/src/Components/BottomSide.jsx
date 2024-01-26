import React from 'react'

const BottomSide = () => {
  return (
    <div className='md:w-full bg-LightBlue mx-auto md:p-36 flex justify-center bg-opacity-45'>
      <div className='md:w-[500px] flex flex-col items-center'>

        <h1 className='md:text-4xl text-2xl pt-4 font-medium font-Roboto'>A Price To Suit Everyone</h1>
        <p className='pt-2 px-6 md:px-0 text-gray-700 text-center'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus </p>
        <h1 className='text-5xl mt-14 text-DarkBlue pt-4 font-bold font-Roboto'>$40</h1>
        <h4 className='pt-2  text-DarkBlue'>UI Design Kit</h4>
        <div className='mt-14 flex flex-col items-center'>

          <h4 className='text-base'>See, One price. Simple.</h4>
          <button className='bg-DarkBlue px-8 text-white text-xs  py-1'>Purchase Now</button>
        </div>
      </div>
    </div>
  )
}

export default BottomSide