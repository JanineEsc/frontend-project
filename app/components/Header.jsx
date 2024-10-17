import React from 'react'
import Logo from '../logo/Logo.png'






const Header = () => {
  return (
    <div className="flex items-center justify-between m-5">
      <div className="flex-shrink-0">
        <img src={Logo} alt="WanderWise Logo" />
      </div>
      <div className=" flex-grow text-center font-livvic "> 
        <h1 className='text-green-900 font-bold text-2xl'> WanderWise </h1>
        <p className='text-green-900'> Find Your Home Away From Home </p>

      </div>
      <div className="flex-shrink-0 m-5">
        avatar

        
      </div>

    </div>
  )
}
export default Header