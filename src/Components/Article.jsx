import React from 'react'
import Currency from '../images/image-currency.jpg'
import Resturant from '../images/image-restaurant.jpg'
import Plane from '../images/image-plane.jpg'
import Confetti from '../images/image-confetti.jpg'
const Article = () => {
  return (
    <div className="bg-gray-200">
        <div className='max-w-6xl mx-auto place-items-center'>
            <div>
                <h4 className=' font-bold text-4xl pt-20 text-slate-700 mt- pb-2 border-b border-gray-200'>Latest Recipes</h4>
                    
                <div className=' mt-8 grid lg:grid-cols-4 md:grid-cols-2 gap-7 pb-5'>
                    {/* Cards go here */}
                    <div className=' card max-w-sm mx-auto'>
                        <img src= {Currency} alt=""  className='w-full  object-cover'/>
                        <div className=' m-4'>
                            <h1 className=' text-slate-600 mb-5 font-semibold hover:text-lime-700 cursor-pointer'>Receive money in any currency with no fees</h1>
                            <p className='text-slate-700 px-5'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                                tenetur. Voluptas modi recusandae optio beatae! Eum porro ea quam?</p>
                        </div>
                    </div>
                    
                    {/* Cards go here */}
                    <div className=' card max-w-sm mx-auto'>
                    <img src= {Resturant} alt=""  className='w-full'/>
                        <div className=' m-4'>
                            <h1 className=' text-slate-600 mb-5 font-semibold hover:text-lime-700 cursor-pointer'>Treat yourself without worrying about money</h1>       
                            <p className='text-slate-700 px-5'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                                tenetur. Voluptas modi recusandae optio beatae! Eum porro ea quam?</p>
                        </div>
                    </div>

                    {/* Cards go here */}
                    <div className=' card max-w-sm mx-auto'>
                        <img src= {Plane} alt=""  className='w-full'/>
                        <div className=' m-4'>
                            <h1 className=' text-slate-600 mb-5 font-semibold hover:text-lime-700 cursor-pointer'>Take your Easybank card wherever you go</h1>
                            <p className='text-slate-700 px-5'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                                tenetur. Voluptas modi recusandae optio beatae! Eum porro ea quam?</p>
                        </div>
                    </div>
                    
                    {/* Cards go here */}
                    <div className=' card max-w-sm mx-auto'>
                        <img src= {Confetti} alt=""  className='w-full'/>
                        <div className=' m-4'>
                            <h1 className=' text-slate-600 mb-5 font-semibold hover:text-lime-700 cursor-pointer'>Our invite-only Beta accounts are now live!</h1>
                            <p className='text-slate-700 px-2 text-left '>Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                                tenetur. Voluptas modi recusandae optio beatae! Eum porro ea quam?</p>
                        </div>
                    </div>

                </div>
            </div>
        </div>

    </div>
  )
}

export default Article