import { Badge } from "@mui/material";
import { useState } from "react";
import { FaShoppingCart, FaSignInAlt, FaStore } from "react-icons/fa";
import { IoIosMenu } from "react-icons/io";
import { RxCross2 } from "react-icons/rx";
import { useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import UserMenu from "../UserMenu";

const Navbar = () => {
    const path = useLocation().pathname;
    const [navbarOpen, setNavbarOpen] = useState(false);
    const { cart } = useSelector((state) => state.carts);
    const { user } = useSelector((state) => state.auth);
    
    return (
        <div className="h-[80px] bg-gradient-to-r from-indigo-900 to-purple-800 shadow-lg text-white z-50 flex items-center sticky top-0">
            <div className="lg:px-16 sm:px-8 px-6 w-full flex justify-between items-center">
                <Link to="/" className="flex items-center text-2xl font-bold hover:scale-105 transition-transform">
                    <FaStore className="mr-2 text-3xl text-amber-300" />
                    <span className="font-[Poppins] bg-gradient-to-r from-amber-300 to-amber-100 bg-clip-text text-transparent">
                        Quick-Shop
                    </span>
                </Link>

                <ul className={`flex sm:gap-8 gap-6 sm:items-center text-white sm:static absolute left-0 top-[80px] sm:shadow-none shadow-xl ${
                    navbarOpen ? "h-fit sm:pb-0 pb-6 w-full" : "h-0 overflow-hidden"
                } transition-all duration-300 sm:h-fit sm:bg-transparent bg-gradient-to-b from-indigo-900 to-purple-800 sm:w-fit w-full sm:flex-row flex-col px-6 sm:px-0`}>
                    
                    <li className="hover:scale-105 transition-transform">
                        <Link 
                            className={`flex items-center py-2 px-1 ${
                                path === "/" 
                                    ? "text-amber-300 font-semibold border-b-2 border-amber-300" 
                                    : "text-white hover:text-amber-200"
                            }`}
                            to="/"
                        >
                            Home
                        </Link> 
                    </li>

                    <li className="hover:scale-105 transition-transform">
                        <Link 
                            className={`flex items-center py-2 px-1 ${
                                path === "/products" 
                                    ? "text-amber-300 font-semibold border-b-2 border-amber-300" 
                                    : "text-white hover:text-amber-200"
                            }`}
                            to="/products"
                        >
                            Products
                        </Link> 
                    </li>

                    <li className="hover:scale-105 transition-transform">
                        <Link 
                            className={`flex items-center py-2 px-1 ${
                                path === "/about" 
                                    ? "text-amber-300 font-semibold border-b-2 border-amber-300" 
                                    : "text-white hover:text-amber-200"
                            }`}
                            to="/about"
                        >
                            About
                        </Link> 
                    </li>

                    <li className="hover:scale-105 transition-transform">
                        <Link 
                            className={`flex items-center py-2 px-1 ${
                                path === "/contact" 
                                    ? "text-amber-300 font-semibold border-b-2 border-amber-300" 
                                    : "text-white hover:text-amber-200"
                            }`}
                            to="/contact"
                        >
                            Contact
                        </Link> 
                    </li>

                    <li className="hover:scale-105 transition-transform">
                        <Link 
                            className={`flex items-center py-2 px-1 ${
                                path === "/cart" 
                                    ? "text-amber-300" 
                                    : "text-white hover:text-amber-200"
                            }`}
                            to="/cart"
                        >
                            <Badge
                                showZero
                                badgeContent={cart?.length || 0}
                                color="warning"
                                overlap="circular"
                                sx={{
                                    "& .MuiBadge-badge": {
                                        backgroundColor: "#f59e0b",
                                        color: "#1e1b4b"
                                    }
                                }}
                            >
                                <FaShoppingCart size={22} className="hover:scale-110 transition-transform" />
                            </Badge>
                        </Link> 
                    </li>

                    {(user && user.id) ? (
                        <li className="hover:scale-105 transition-transform">
                            <UserMenu />
                        </li>
                    ) : (
                        <li className="hover:scale-105 transition-transform ml-2">
                            <Link 
                                className="flex items-center space-x-2 px-4 py-2 
                                    bg-gradient-to-r from-amber-400 to-amber-500 
                                    text-indigo-900 font-semibold rounded-lg shadow-md 
                                    hover:from-amber-300 hover:to-amber-400 hover:shadow-lg
                                    transition-all duration-300 hover:scale-105"
                                to="/login"
                            >
                                <FaSignInAlt />
                                <span>Login</span>
                            </Link> 
                        </li>
                    )}
                </ul>

                <button
                    onClick={() => setNavbarOpen(!navbarOpen)}
                    className="sm:hidden flex items-center focus:outline-none"
                >
                    {navbarOpen ? (
                        <RxCross2 className="text-amber-300 text-3xl hover:scale-110 transition-transform" />
                    ) : (
                        <IoIosMenu className="text-white text-3xl hover:text-amber-300 hover:scale-110 transition-transform" />
                    )}
                </button>
            </div>
        </div>
    )
}

export default Navbar;