import React , {useState} from 'react'
import Logo from '../images/logo.svg'
import Close from '../images/icon-close.svg'
import Bar from '../images/icon-hamburger.svg'
const NavBar = () => {

     const [open, setOpen] = useState(false);

  return (
    <div className=' border-b-2'>
        <div className=" grid justify-between mx-auto gap-5 max-w-xl md:max-w-none md:flex md:justify-around md:items-center md:mx-auto py-5 md:py-7">
            <div className="">
                <img src={Logo} className="w-60" alt="" srcSet="" />
            </div>
            <div className="absolute right-8 top-7 flex md:hidden cursor-pointer">
                {open === true 
                ? <div className=" md:hidden" onClick={ () => setOpen(false) }> 
                    <img src={Close} alt="Close Icon" srcset="" className='' />
                </div> 
                 : <div className=" md:hidden" onClick={ () => setOpen(true) }> 
                    <img src={Bar} alt="Bar Icon" srcset="" />
                </div> 
                }
            </div>
            <div className={` mx-auto md:flex grid place-items-center mb-10 md:mb-0 items-center gap-5 ${open ? 'block' : 'hidden'}`}>
                <div className=" grid gap-5 mx-5 md:mx-0 md:flex capitalize font-semibold ">
                    <a href="/" className=' md:px-7 text-gray-500'> Home </a>
                    <a href="/" className=' md:px-7 text-gray-500'> about </a>
                    <a href="/" className=' md:px-7 text-gray-500'> contact </a>
                    <a href="/" className=' md:px-7 text-gray-500'> blog </a>
                    <a href="/" className=' md:px-7 text-gray-500'> careers </a>
                </div>
                <div className="  md:block"> 
                    <a href="/" className='py-3 px-5 md:py-3 md:px-5 bg-gradient-to-r from-green-400 to-blue-400 rounded-full font-semibold text-white'> Request invite</a>
                </div>
            </div> 
        </div>
    </div>
  )
}

export default NavBar