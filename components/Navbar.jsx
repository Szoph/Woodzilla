'use client';
import { useState } from 'react';
import Link from 'next/link';

const Navbar = () => {
    const [toggleMobileMenu, setToggleMobileMenu] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setToggleMobileMenu(!toggleMobileMenu);
        setMenuOpen(!menuOpen);
    }
  return (
    <div className='sticky top-0 z-50 bg-white w-full h-full flex justify-between items-center bg-gray-100 px-8 pt-12 pb-10'>
    <div className=''>
        <Link href='/'><h2 className='text-2xl font-extrabold'>WOODZILLA</h2></Link>
    </div>

{/*DESKTOP MENU*/}

    <div className='hidden lg:flex gap-14 items-center'>
    {/* <Link href='/'>
        <h3 className='font-semibold text-gray-600 hover:text-black'>HOME</h3>
        </Link> */}
        <Link href='/portfolio'>
        <h3 className='font-semibold text-gray-600 hover:text-black'>PORTFOLIO</h3>
        </Link>
        <Link href='/about'>
        <h3 className='font-semibold text-gray-600 hover:text-black'>ABOUT</h3>
        </Link>
        <Link href='/prints'>
        <h3 className='font-semibold text-gray-600 hover:text-black'>PRINTS</h3>
        </Link>
        <Link href='/enquiries'>
        <h3 className='font-semibold text-gray-600 hover:text-black'>ENQUIRIES</h3>
        </Link>
    </div>

    {/*MOBILE MENU*/}
    <div className='lg:hidden '>
    <svg className={`${menuOpen ? 'hidden' : ''} hover:cursor-pointer lucide lucide-menu`} onClick={() => toggleMenu()} xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>

    <svg className={`${menuOpen ? '' : 'hidden'} hover:cursor-pointer lucide lucide-x`} onClick={() => toggleMenu()} xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>

    {menuOpen && (
        <div className='absolute left-0 w-full h-screen z-40 bg-white'>
            <div className='flex flex-col gap-20 items-center justify-center h-full py-40'>
            <Link href='/portfolio' onClick={toggleMenu}>
            <h3 className='font-semibold text-xl'>PORTFOLIO</h3>
            </Link>
            <Link href='/about' onClick={toggleMenu}>
            <h3 className='font-semibold text-xl'>ABOUT</h3>
            </Link>
            <Link href='/prints' onClick={toggleMenu}>
            <h3 className='font-semibold text-xl'>PRINTS</h3>
            </Link>
            <Link href='/enquiries' onClick={toggleMenu}>
            <h3 className='font-semibold text-xl'>ENQUIRIES</h3>
            </Link>
            </div>

        </div>
    )}

    </div>


    </div>
  )
}

export default Navbar