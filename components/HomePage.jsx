import React from 'react'
import Image from 'next/image'

function HomePage() {
  return (
    <div className='w-full h-screen lg:px-36 lg:py-20 md:px-10 md:pt-10 p-0 flex justify-center'>
        <div className='lg:h-5/6 md:h-full h-[800px] lg:min-h-[600px]'>
          <img src='/art2.jpeg' alt='art' className='object-cover object-bottom w-full lg:h-full md:h-full h-[800px]' />
 
        </div>

    </div>
  )
}

export default HomePage