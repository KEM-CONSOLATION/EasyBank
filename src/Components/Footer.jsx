import React from 'react'
import Logo from '../images/logo.svg'
import Facebook from '../images/icon-facebook.svg'
import Youtube from '../images/icon-youtube.svg'
import Twitter from '../images/icon-twitter.svg'
import Pinterest from '../images/icon-pinterest.svg'
import Instagram from '../images/icon-instagram.svg'

const Footer = () => {
  return (
    <div className=' bg-teal-500'>
        <div className="grid grid-cols-3 place-items-center  py-10">
            <div className=' '>
                <img src={Logo} alt="" srcSet="" />
                <div className=" grid grid-cols-5 gap-0">
                    <a href="/">
                        <img src={Facebook} alt="" srcset="" />
                    </a>
                    <a href="/">
                        <img src={Youtube} alt="" srcset="" />
                    </a>
                    <a href="/">
                        <img src={Twitter} alt="" srcset="" />
                    </a>
                    <a href="/">
                        <img src={Instagram} alt="" srcset="" />
                    </a>
                    <a href="/">
                        <img src={Pinterest} alt="" srcset="" />
                    </a>
                </div>
            </div>

            <div className=" grid grid-cols-2 font-semibold ">
                <a href="/">About Us</a>
                <a href="/">Contact</a>
                <a href="/">Blog</a>
                <a href="/">Careers</a>
                <a href="/">Support</a>
                <a href="/">Privacy Policy</a>
            </div>
            <div className=" text-center">
                <a href="/" className='font-semibold capitalize px-3 py-3 md:px-10 bg-gradient-to-r from-green-400 to-blue-400 rounded-full md:py-3 text-white'>Request Invite</a>
                <p className=' pt-5'> Easybank. All Rights Reserved</p>
            </div>
        </div>
        
    </div>
  )
}

export default Footer