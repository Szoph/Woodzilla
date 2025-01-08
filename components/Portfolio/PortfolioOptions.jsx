import React from 'react'
import Link from 'next/link'

const PortfolioOptions = () => {
    const options = [
        {
            name: 'WATERCOLOUR', 
            slug: 'watercolour', 
            image: '/art4.jpeg',
        }, 
        {
            name: 'DIGITAL', 
            slug: 'digital',
            image: '/art2.jpeg',
        }, 
        {
            name: 'CHARACTERS', 
            slug: 'characters', 
            image: '/art5.jpeg',
        },
        {
            name: 'OTHER', 
            slug: 'other', 
            image: '/art1.jpeg', 
        }
    ]
  return (
    <div className='w-full flex justify-center items-center pt-20 p-8'>
    <div className='lg:w-2/3 md:w-full w-full grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-16'>
    {options.map((option) => (
        <Link href={`/portfolio/${option.slug}`} key={option.slug}>
            <div className='w-full relative hover:text-white text-zinc-700'>
                <img src={option.image} alt={option.name} className='w-full md:h-64 lg:h-96 h-64 object-cover opacity-50 hover:opacity-100 lg:grayscale md:grayscale hover:grayscale-0' />
                <h2 className='font-bold absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 lg:text-4xl md:text-3xl text-2xl tracking-widest pointer-events-none'>{option.name}</h2>
            </div>
        </Link>
    ))}
        
    </div>
    </div>
  )
}

export default PortfolioOptions