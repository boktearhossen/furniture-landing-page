import React, { useState } from 'react';
 import {menus} from './menus';
import { AiOutlineUser } from "react-icons/ai";
import { BsCart4 } from "react-icons/bs";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from 'react-router-dom';


const Header = () => {
 const [mobileMenu, setMobileMenu] = useState(false)
 const menuBerger = () => {
    setMobileMenu(!mobileMenu)
 }

  return (
     <section className=" bgColor sticky top-0 z-50">
        <div className="container md:w-5/6 w-full mx-auto pt-5 pb-7 px-2 md:px-0">
            <div className="flex justify-between items-center">
            {/* logo */}
            <div className='w-40'>
            <Link to="/" className="font-semi text-4xl primary_font">Furniture</Link>
            </div>
            {/* navLink */}
                <div className="hidden md:block top-[100%]">
                    <ul className='flex md:flex-row flex-col md:gap-10 gap-3'>
                        {menus.map((menu, index) => (
                         <li key={index}>
                           <Link to={menu.link} className='font-semi'>{menu.name}</Link>
                        </li>   
                        ))} 
                    
                    </ul>
                </div>
                {/* icons */}
                <div className="">
                    <ul className="flex gap-4 md:gap-6">
                        <li><Link to='cart' className='text-xl' > <BsCart4/> </Link></li>
                        <li> <Link to='login' className='text-xl'> <AiOutlineUser/> </Link></li>
                        <li>  
                            <a href='#' onClick={() => menuBerger()} className='text-xl md:hidden block'> 
                              <GiHamburgerMenu/> 
                            </a>
                        </li>
                        
                    </ul>
                </div>
            </div>
            
        </div>

        
        {/* toggle */}
        {
           mobileMenu &&
               <div className='md:hidden block'>
                 <ul className='flex md:flex-row flex-col md:gap-10 gap-3 menu text-center pb-3'>
    
                     {menus.map((menu, index) => (
                         <li key={index}>
                           <a href={menu.link} className='font-semi'>{menu.name}</a>
                        </li>   
                        ))} 
                 </ul>
               </div>
        }
     </section>
  )
}

export default Header






