import React from 'react'
import Image from 'next/image'

function HomePage() {
  return (
    <div className='w-full lg:px-8 md:px-8 lg:py-20 md:pt-10 p-0 flex justify-center'>
        <div className=''>
          <img src='/art2.jpeg' alt='art' className='object-cover object-bottom w-full lg:h-full md:h-full h-[800px]' />
 
        </div>

    </div>
  )
}

export default HomePage