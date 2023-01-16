import React from 'react'
import Online from '../images/icon-online.svg'
import Budgeting from '../images/icon-budgeting.svg'
import Onboarding from '../images/icon-onboarding.svg'
import Api from '../images/icon-api.svg'

const Choose = () => {
  return (
    <div className="bg-gray-200">
        <div className='max-w-6xl mx-auto place-items-center'>
            <div className=" pt-10">
                <h1 className='font-semibold text-4xl text-slate-700 mb-5'> Why choose Easybank?</h1>
                <p className='w-96'>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Optio reiciendis voluptatum voluptatibus rem quas expedita
                    molestiae amet tenetur obcaecati soluta!</p>
            </div>

            <div className=" mt-16 grid md:grid-cols-2 lg:grid-cols-4 gap-5">
                <div className=" grid gap-4 max-w-sm mx-auto ">
                    <img src={Online} alt="" srcset="" />
                    <h1 className=' font-semibold text-slate-700 text-lg'>Online Banking</h1>
                    <p className='text-slate-700'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                        Dolorem nemo veritatis, ipsum autem hic quod repellendus 
                        possimus quidem ratione nihil, ea earum corporis vel nostrum 
                        tenetur. Voluptas modi recusandae optio beatae! Eum porro ea quam?</p>
                </div>
                <div className=" grid gap-4 max-w-sm mx-auto">
                    <img src={Budgeting} alt="" srcset="" />
                    <h1 className='font-semibold text-slate-700 text-lg'>Simple Budgeting</h1>
                    <p className='text-slate-700'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                        Dolorem nemo veritatis, ipsum autem hic quod repellendus 
                        possimus quidem ratione nihil, ea earum corporis vel nostrum 
                        tenetur. Voluptas modi recusandae optio beatae! Eum porro ea quam?</p>
                </div>
                <div className="grid gap-4 max-w-sm mx-auto">
                    <img src={Onboarding} alt="" srcset="" />
                    <h1 className='font-semibold text-slate-700 text-lg'>Fast Onboarding</h1>
                    <p className='text-slate-700'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                        Dolorem nemo veritatis, ipsum autem hic quod repellendus 
                        possimus quidem ratione nihil, ea earum corporis vel nostrum 
                        tenetur. Voluptas modi recusandae optio beatae! Eum porro ea quam?</p>
                </div>
                <div className="grid gap-4 max-w-sm mx-auto">
                    <img src={Api} alt="" srcset="" />
                    <h1 className='font-semibold text-slate-700 text-lg'>Open API</h1>
                    <p className='text-slate-700'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                        Dolorem nemo veritatis, ipsum autem hic quod repellendus 
                        possimus quidem ratione nihil, ea earum corporis vel nostrum 
                        tenetur. Voluptas modi recusandae optio beatae! Eum porro ea quam?</p>
                </div>
            </div>
        </div>
    </div>

  )
}

export default Choose