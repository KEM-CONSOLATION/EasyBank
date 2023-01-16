import React from 'react'
import BgIntro from '../images/bg-intro-desktop.svg'
import Phone from '../images/image-mockups.png'
const FirstPage = () => {
  return (
    <div className=''>
        <div className="max-w-6xl grid place-items-center md:grid-cols-2 mx-auto ">
            <div className=" max-w-lg mt-20 md:mb-5 mb-20">
                <h1 className=' font-semibold text-slate-700 text-5xl mb-5'> Next generation digital banking</h1>
                <p className=' text-slate-500 mb-5'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                Aperiam molestias assumenda at mollitia fugit itaque 
                dolorum ab a? Omnis asperiores libero, quasi laudantium 
                quia quae?</p>

                    <a href="/" className='font-semibold capitalize md:px-10 px-7 bg-gradient-to-r from-green-400 to-blue-400 rounded-full md:py-3 py-3 text-white'>Request Invite</a>
            </div>
            
            <div className="relative md:flex justify-center items-center hidden">
                <div className="">
                    <img src={BgIntro} className=" max-w-xs md:max-w-md" alt="" srcset="" />
                </div>
                <div className="absolute top-0  w-96">
                    <img src={Phone} className=" max-w-xs md:max-w-md" alt="" srcset="" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default FirstPage