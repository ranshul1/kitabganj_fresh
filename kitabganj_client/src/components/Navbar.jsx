import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { FaBarsStaggered, FaBlog, FaXmark } from "react-icons/fa6";
import { AuthContext } from '../contects/AuthProvider';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isSticky, setIsSticky] = useState(false);
    
    const {user} = useContext(AuthContext);
    //toggle menu
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    }

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 100) {
                setIsSticky(true);
            } else {
                setIsSticky(false);
            }
        }

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        }
    }, [])

    //nav items
    const navItems = [
        { link: "Home", path: "/" },
        { link: "About", path: "/about" },
        { link: "Shop", path: "/shop" },
        { link: "Sell Your Book", path: "/admin/dashboard/upload" },
        { link: "Blog", path: "/blog" },
    ];

    return (
        <header className={`w-full fixed top-0 left-0 right-0 transition-all ease-in duration-300 ${isSticky ? "bg-blue-300" : "bg-transparent"}`}>
            <nav className='py-4 lg:px-24 px-4 flex justify-between items-center'>
                <div className='flex flex-col items-start'>
                    {/* logo */}
                    <Link to="/" className='text-2xl font-bold text-blue-700 flex items-center gap-2'>
                    <img src='/src/assets/logo.jpg' alt="किताबगंज" className="h-12" />किताबगंज
                    </Link>

                    {/* menu btn for the mobile devices */}
                    <div className='md:hidden mt-2'>
                        <button onClick={toggleMenu} className='text-black focus:outline-none'>
                            {isMenuOpen ? <FaXmark className='h-5 w-5 text-black' /> : <FaBarsStaggered className='h-5 w-5 text-black' />}
                        </button>
                    </div>
                </div>

                {/* nav items for large devices */}
                <ul className='md:flex space-x-12 hidden'>
                    {navItems.map(({ link, path }) => (
                        <Link key={path} to={path} className='block text-base text-black uppercase cursor-pointer hover:text-blue-700'>
                            {link}
                        </Link>
                    ))}
                </ul>

                {/* btn for lg devices */}
                <div className='hidden lg:flex items-center'>
                    <button>
                        <FaBarsStaggered className='w-5 hover:text-blue-700' />
                    </button>
                    {
                        user? user.email : ""
                    }
                </div>
            </nav>

            {/* navitems for sm devices */}
            <div className={`md:hidden bg-blue-700 ${isMenuOpen ? "block" : "hidden"} fixed top-0 right-0 left-0 space-y-4 px-4 mt-16 py-7`}>
                {navItems.map(({ link, path }) => (
                    <Link key={path} to={path} className='block text-base text-white uppercase cursor-pointer'>
                        {link}
                    </Link>
                ))}
            </div>
        </header>
    )
}

export default Navbar;
