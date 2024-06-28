'use client'
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { useWindowSize } from '../../hooks/useWindowSize'
import { IoMdClose } from "react-icons/io";
import { usePathname } from 'next/navigation'

const Navbar = () => {
    const [navbarOpen, setNavbarOpen] = useState<boolean>(false);

    const pathname = usePathname()

  const { width, height } = useWindowSize();

  useEffect(() => {
    if (width >= 1020 && navbarOpen) {
      setNavbarOpen(!navbarOpen)
    }

  }, [width, height, navbarOpen])

  return (
    <main className="max-w-screen-2xl mx-auto px-[22px] py-[26px] md:px-[84px] md:py-[52px]">
      <section id="navbar" className="flex flex-row justify-between font-medium text-base items-center">
        <div id="navbar-logo">
            <Link href='/'>
                <Image src="/logo/logo-emenu.svg" width={130} height={40} alt="Emenu"/>            
            </Link>
        </div>
        
        <div className="hidden lg:flex flex-row justify-between space-x-20 items-center">
          <ul className="flex flex-row justify-evenly space-x-6">
            <li className="hover:text-[#FF2755]">
              <Link href='/'>
                <p>Discover Menu</p>
              </Link>
            </li>
            <li className="hover:text-[#FF2755]">
              <Link href='/'>
                <p>Specials</p>
              </Link>
            </li>
            <li className="hover:text-[#FF2755]">
              <Link href='/'>
                <p>Reservations</p>
              </Link>
            </li>
            <li className="hover:text-[#FF2755]">
              <Link href='/'>
                <p>More Options</p>
              </Link>
            </li>
          </ul>
          <div>
            <button className="bg-black text-white p-2 rounded-lg w-[100px]"> 
              <Link href='/'>
                <p>Contact</p>
              </Link>
            </button>
        </div>
        </div>

        <div className="flex lg:hidden flex-col">
          <div onClick={() => setNavbarOpen(!navbarOpen)}>
          { navbarOpen ? (
            <IoMdClose size={32}/>
          ) : (
            <GiHamburgerMenu size={32}/>
          )}
          </div>
        </div>

        <ul className={` ${navbarOpen ? 'flex' : 'hidden'} z-10 flex-col justify-evenly space-y-6 absolute bg-[#FF2755] items-center text-center text-white font-medium p-4 rounded-md right-5 top-20 md:right-20 md:top-28 shadow-lg`}>
            <li className={pathname.includes('discover') ? 'bg-black rounded-md p-2 w-full' : ''}>
              <Link href='/discover'>
                <p>Discover Menu</p>
              </Link>
            </li>
            <li className={pathname.includes('specials') ? 'bg-black rounded-md p-2 w-full' : ''}>
              <Link href='/specials'>
                <p>Specials</p>
              </Link>
            </li>
            <li className={pathname.includes('reservations') ? 'bg-black rounded-md p-2 w-full' : ''}>
              <Link href='/reservations'>
                <p>Reservations</p>
              </Link>
            </li>
            <li className={pathname.includes('options') ? 'bg-black rounded-md p-2 w-full' : ''}>
              <Link href='/options'>
                <p>More Options</p>
              </Link>
            </li>
            <li className={pathname.includes('contact') ? 'bg-black rounded-md p-2 w-full' : ''}>
              <Link href='/contact'>
                <p>Contact</p>
              </Link>
            </li>
          </ul>
      </section>
    </main>
  )
}

export default Navbar;