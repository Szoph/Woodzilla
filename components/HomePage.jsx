import React from 'react'
import Image from 'next/image'

function HomePage() {
  return (
    <div className='w-full h-screen lg:px-36 lg:py-20 md:p-10 p-0 flex justify-center'>
        <div className='lg:h-5/6 md:h-full h-screen lg:min-h-[600px]'>
          <img src='/art2.jpeg' alt='art' className='object-cover w-full h-full' />
 
        </div>

    </div>
  )
}

export default HomePage