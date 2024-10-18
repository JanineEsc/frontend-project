import React from 'react'
import { UserRoundPen } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'


const Header = () => {
  return (
    <div className="flex items-center justify-evenly m-5">
      <div className="flex-shrink-0">
        <Image src="/images/Logo.png" alt="WanderWise Logo" width={70} height={70} />
      </div>
      <div className=" flex-grow text-center"> 
        <h1 className='text-green-900 font-bold font-livvic text-2xl'> WanderWise </h1>
        <p className='text-green-900 font-livvic'> Find Your Home Away From Home </p>

      </div>
      <div className="flex-shrink-0 m-5">
        <Link href="/sign-in">
        <UserRoundPen className='h-11 w-11 rounded-full' />
        </Link>
      </div>
    </div>
  )
}

export default Header