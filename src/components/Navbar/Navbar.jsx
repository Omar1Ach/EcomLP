import React from 'react'
import Logo from '../../assets/logo.png'

const Navbar = () => {
  return (
    <div>
        {/* upper Navbar */}
      <div>
        <div>
            <div>
                <a href="#"
                className='font-bold text-2xl sm:text-3xl flex gap-2'>
                    <img src={Logo} alt="Logo" 
                    className='w-10 uppercase'/>
                    Shopsy
                </a>
            </div>
            {/* search bar and order button */}
            <div>
                <div className='group'>
                    <input type="text" placeholder='search'
                     className='w-[200px] sm:w-[200px]
                      group-hover:w-[300px] transition-all duration-300
                      rounded-full border border-gray-300 px-2 py-1
                      focus:outline-none focus:border-1 focus:border-primary' />
                </div>
            </div>
        </div>
      </div>
      {/* lower Navbar */}
      <div></div>
    </div>
  )
}

export default Navbar
