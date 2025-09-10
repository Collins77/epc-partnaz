import { Menu, X, ChevronDown } from 'lucide-react';
import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [openDropdown, setOpenDropdown] = useState(null); // for mobile dropdowns

    const navItems = [
        { name: "Home", path: "/" },
        { name: "About Us", path: "/about" },
        {
            name: "Services", path: "/services",
            dropdown: [
                { name: "Advocacy & Representation", path: "/services/advocacy" },
                { name: "Investment Funding", path: "/services/funding" },
                { name: "EPC Consultancy", path: "/services/consultancy" },
            ]
        },
        { name: "Funding", path: "/services/funding" },
        { name: "Projects", path: "/projects" },
        {
            name: "Sectors", path: "/sectors",
            dropdown: [
                { name: "Energy & Power", path: "/sectors/energy" },
                { name: "Oil & Gas", path: "/sectors/oil" },
                { name: "Infrastructure", path: "/sectors/infrastructure" },
                { name: "Industrial Plants", path: "/sectors/plants" },
                { name: "Water & Environment", path: "/sectors/water" },
                { name: "Special Projects", path: "/sectors/special-projects" },
            ]
        },
        { name: "Contact Us", path: "/contact" },
    ];

    return (
        <div className='flex items-center bg-black text-white h-[70px] justify-between px-[40px] relative z-50'>
            {/* Logo */}
            <div className='flex items-center gap-2'>
                <div className='h-[40px] w-[40px] flex items-center justify-center bg-[#FFD700] rounded-md'>
                    <h1>E</h1>
                </div>
                <div className='flex flex-col'>
                    <h1 className='text-[#FFD700] font-bold'>EPC Partnaz</h1>
                    <p className='text-[9px]'>Advocate · EPC Contractors Consultant · Investment Facilitator</p>
                </div>
            </div>

            {/* Desktop Nav */}
            <div>
                <nav className="hidden md:flex">
                    <ul className="flex items-center gap-4">
                        {navItems.map((item) => (
                            <li key={item.path} className="relative group">
                                <NavLink
                                    to={item.path}
                                    className={({ isActive }) =>
                                        `relative pb-2 transition-colors duration-300 text-sm ${isActive ? "text-yellow-500" : "text-white hover:text-yellow-600"
                                        } after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-full after:h-[2px] after:bg-yellow-500 after:scale-x-0 hover:after:scale-x-100 after:origin-left after:transition-transform after:duration-300 ${isActive ? "after:scale-x-100" : ""
                                        } flex items-center gap-1`
                                    }
                                >
                                    {item.name}
                                    {item.dropdown && <ChevronDown size={14} />}
                                </NavLink>

                                {/* Dropdown for Desktop */}
                                {item.dropdown && (
                                    <ul
                                        className="absolute left-0 mt-2 bg-black shadow-lg rounded-md py-2 w-[180px]
               opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto
               transition-opacity duration-300"
                                    >
                                        {item.dropdown.map((sub) => (
                                            <li key={sub.path}>
                                                <NavLink
                                                    to={sub.path}
                                                    className="block px-4 py-2 text-sm text-white hover:bg-yellow-600"
                                                >
                                                    {sub.name}
                                                </NavLink>
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>

            {/* Desktop CTA */}
            <div className="hidden md:block">
                <button className="bg-linear-to-r from-yellow-200 via-yellow-400 to-yellow-600 text-black hover:bg-yellow-600 cursor-pointer px-4 py-2 rounded-md">
                    Get Consultation
                </button>
            </div>

            {/* Mobile Menu Icon */}
            <div className="md:hidden">
                <button onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Mobile Nav */}
            {isOpen && (
                <div className="absolute top-[70px] left-0 w-full bg-black shadow-lg md:hidden">
                    <ul className="flex flex-col items-center gap-4 py-4">
                        {navItems.map((item) => (
                            <li key={item.path} className="w-full text-center">
                                {item.dropdown ? (
                                    <>
                                        <button
                                            onClick={() =>
                                                setOpenDropdown(openDropdown === item.name ? null : item.name)
                                            }
                                            className="w-full flex items-center justify-center gap-1 py-2 text-white hover:text-yellow-600"
                                        >
                                            {item.name} <ChevronDown size={14} />
                                        </button>
                                        {/* Mobile Dropdown */}
                                        {openDropdown === item.name && (
                                            <ul className="flex flex-col bg-gray-900">
                                                {item.dropdown.map((sub) => (
                                                    <li key={sub.path}>
                                                        <NavLink
                                                            to={sub.path}
                                                            className="block px-4 py-2 text-sm text-white hover:bg-yellow-600"
                                                            onClick={() => setIsOpen(false)}
                                                        >
                                                            {sub.name}
                                                        </NavLink>
                                                    </li>
                                                ))}
                                            </ul>
                                        )}
                                    </>
                                ) : (
                                    <NavLink
                                        to={item.path}
                                        className={({ isActive }) =>
                                            `block relative pb-1 transition-colors duration-300 ${isActive
                                                ? "text-yellow-600"
                                                : "text-white hover:text-yellow-600"
                                            }`
                                        }
                                        onClick={() => setIsOpen(false)}
                                    >
                                        {item.name}
                                    </NavLink>
                                )}
                            </li>
                        ))}
                        <li>
                            <button className="bg-linear-to-r from-yellow-200 via-yellow-400 to-yellow-600 text-black cursor-pointer px-4 py-2 rounded-md">
                                Get Quote
                            </button>
                        </li>
                    </ul>
                </div>
            )}
        </div>
    )
}

export default Navbar;
