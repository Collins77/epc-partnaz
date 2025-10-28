import { Menu, X, ChevronDown } from "lucide-react";
import React, { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [openDropdown, setOpenDropdown] = useState(null);
    const location = useLocation();

    const navItems = [
        { name: "Home", path: "/" },
        { name: "About Us", path: "/about" },
        {
            name: "Services",
            path: "#", // no page, only dropdown
            dropdown: [
                { name: "Advocacy & Representation", path: "/services/advocacy" },
                { name: "Investment Funding", path: "/services/funding" },
                { name: "EPC Consultancy", path: "/services/consultancy" },
            ],
        },
        { name: "Funding", path: "/services/funding" },
        { name: "Projects", path: "/projects" },
        {
            name: "Sectors",
            path: "#", // no page, only dropdown
            dropdown: [
                { name: "Energy & Power", path: "/sectors/energy" },
                { name: "Oil & Gas", path: "/sectors/oil" },
                { name: "Infrastructure", path: "/sectors/infrastructure" },
                { name: "Industrial Plants", path: "/sectors/plants" },
                { name: "Water & Environment", path: "/sectors/water" },
                { name: "Special Projects", path: "/sectors/special-projects" },
            ],
        },
        { name: "Contact Us", path: "/contact" },
    ];

    const isActivePath = (p) => {
        if (!p || p === "#") return false;
        return location.pathname === p || location.pathname.startsWith(p + "/");
    };

    return (
        <div className="flex items-center bg-black text-white h-[70px] justify-between px-[40px] relative z-50">
            {/* Logo */}
            <div className="flex items-center gap-2">
                <div className="h-[40px] w-[40px] flex items-center justify-center bg-[#FFD700] rounded-md">
                    <h1 className="font-bold">E</h1>
                </div>
                <div className="flex flex-col">
                    <h1 className="text-[#FFD700] font-bold">EPC Partnaz</h1>
                    <p className="text-[9px]">
                        Advocate · EPC Contractors Consultant · Investment Facilitator
                    </p>
                </div>
            </div>

            {/* Desktop Nav */}
            <div className="hidden md:block">
                <nav>
                    <ul className="flex items-center gap-6">
                        {navItems.map((item) => {
                            const hasDropdown = !!item.dropdown;

                            // For items with dropdown but no page (Services & Sectors)
                            if (hasDropdown && item.path === "#") {
                                return (
                                    <li key={item.name} className="relative group">
                                        <div
                                            className={`flex items-center gap-1 text-sm cursor-pointer pb-2 transition-colors duration-300 ${isActivePath(item.dropdown[0].path)
                                                    ? "text-yellow-500"
                                                    : "text-white hover:text-yellow-500"
                                                }`}
                                        >
                                            <span>{item.name}</span>
                                            <ChevronDown size={14} />
                                        </div>

                                        {/* underline effect */}
                                        <div
                                            className={`absolute left-0 bottom-0 h-[2px] bg-[#fdb930] transition-all ${isActivePath(item.dropdown[0].path)
                                                    ? "w-full"
                                                    : "w-0 group-hover:w-full"
                                                }`}
                                        />

                                        {/* Dropdown (desktop) */}
                                        <ul
                                            className="absolute left-0 top-full mt-1 w-[220px] bg-black shadow-lg rounded-md py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200"
                                        >
                                            {item.dropdown.map((sub) => (
                                                <li key={sub.path}>
                                                    <NavLink
                                                        to={sub.path}
                                                        className={({ isActive }) =>
                                                            `block px-4 py-2 text-sm ${isActive
                                                                ? "text-[#fdb930]"
                                                                : "text-white hover:text-[#002e5a] hover:bg-yellow-500/10"
                                                            }`
                                                        }
                                                    >
                                                        {sub.name}
                                                    </NavLink>
                                                </li>
                                            ))}
                                        </ul>
                                    </li>
                                );
                            }

                            // Regular nav links
                            return (
                                <li key={item.path} className="relative group">
                                    <NavLink
                                        to={item.path}
                                        className={({ isActive }) =>
                                            `relative pb-2 transition-colors duration-300 text-sm flex items-center gap-1 ${isActive
                                                ? "text-yellow-500 font-semibold"
                                                : "text-white hover:text-yellow-500"
                                            }`
                                        }
                                        end
                                    >
                                        <span>{item.name}</span>
                                        {item.dropdown && <ChevronDown size={14} />}
                                    </NavLink>

                                    {/* underline */}
                                    <div
                                        className={`absolute left-0 bottom-0 h-[2px] bg-[#fdb930] transition-all ${isActivePath(item.path)
                                                ? "w-full"
                                                : "w-0 group-hover:w-full"
                                            }`}
                                    />
                                </li>
                            );
                        })}
                    </ul>
                </nav>
            </div>

            {/* Desktop CTA */}
            <div className="hidden md:block">
                <button className="bg-gradient-to-r from-yellow-200 via-yellow-400 to-yellow-600 text-black hover:opacity-95 px-4 py-2 rounded-md">
                    Get Consultation
                </button>
            </div>

            {/* Mobile Menu Icon */}
            <div className="md:hidden">
                <button onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
                    {isOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Mobile Nav */}
            {isOpen && (
                <div className="absolute top-[70px] left-0 w-full bg-black shadow-lg md:hidden">
                    <ul className="flex flex-col items-center gap-2 py-4">
                        {navItems.map((item) => {
                            const hasDropdown = !!item.dropdown;
                            if (hasDropdown) {
                                return (
                                    <li key={item.name} className="w-full text-center">
                                        <button
                                            onClick={() =>
                                                setOpenDropdown(
                                                    openDropdown === item.name ? null : item.name
                                                )
                                            }
                                            className="w-full flex items-center justify-center gap-2 py-2 text-white hover:text-yellow-500"
                                        >
                                            {item.name}
                                            <ChevronDown size={14} />
                                        </button>

                                        {openDropdown === item.name && (
                                            <ul className="flex flex-col bg-gray-900 w-full">
                                                {item.dropdown.map((sub) => (
                                                    <li key={sub.path}>
                                                        <NavLink
                                                            to={sub.path}
                                                            className={({ isActive }) =>
                                                                `block px-4 py-2 text-sm ${isActive
                                                                    ? "text-[#fdb930]"
                                                                    : "text-white hover:text-yellow-500"
                                                                }`
                                                            }
                                                            onClick={() => setIsOpen(false)}
                                                        >
                                                            {sub.name}
                                                        </NavLink>
                                                    </li>
                                                ))}
                                            </ul>
                                        )}
                                    </li>
                                );
                            }

                            // normal mobile link
                            return (
                                <li key={item.path} className="w-full text-center">
                                    <NavLink
                                        to={item.path}
                                        className={({ isActive }) =>
                                            `block py-2 px-4 w-full transition-colors ${isActive
                                                ? "text-yellow-500 font-semibold"
                                                : "text-white hover:text-yellow-500"
                                            }`
                                        }
                                        onClick={() => setIsOpen(false)}
                                    >
                                        {item.name}
                                    </NavLink>
                                </li>
                            );
                        })}

                        <li className="w-full text-center pt-2">
                            <button className="bg-gradient-to-r from-yellow-200 via-yellow-400 to-yellow-600 text-black px-4 py-2 rounded-md">
                                Get Quote
                            </button>
                        </li>
                    </ul>
                </div>
            )}
        </div>
    );
};

export default Navbar;
