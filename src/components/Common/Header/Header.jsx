import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { FiSearch } from "react-icons/fi";
import { FaRegHeart } from "react-icons/fa";
import { HiOutlineShoppingCart } from "react-icons/hi";
import logo from '../../../assets/icons/Logo.png'
import { AuthContext } from '../../../context/AuthProvider';
import { CgProfile } from "react-icons/cg";
import googlelogo from '../../../assets/icons/google-logo.png';
import toast from 'react-hot-toast';

const Header = () => {

    const { user, userLogOut } = useContext(AuthContext);

    const handleSignOut = () => {
        userLogOut()
            .then(() => {
                toast.success('User Logout Successfull!');
            })
            .catch(error => console.log(error))

    }
    const menuItem = <React.Fragment>
        <li className='text-[#666666] text-xl font-semibold'><Link to="/">Home</Link></li>
        <li className='text-[#666666] text-xl font-semibold'><Link to="/shop">Shop</Link></li>
        <li className='text-[#666666] text-xl font-semibold'><Link to="/pages">Pages</Link></li>
        <li className='text-[#666666] text-xl font-semibold'><Link to="/reviews">Reviews</Link></li>
        <li className='text-[#666666] text-xl font-semibold'><Link to="/about">About</Link></li>
        <li className='text-[#666666] text-xl font-semibold'><Link to="/contact">Contact Us</Link></li>

        {/* {
            user?.uid ?
                <>
                    <li><Link to="/dashboard">Dashboard</Link></li>
                    <li><Link>{user.displayName}</Link></li>
                    <li><button onClick={handleSignOut}>Sign Out</button></li>
                </> :
                <>
                    <li><Link to="/login">Login</Link></li>
                </>

        } */}
    </React.Fragment>

    return (
        <header>
            <div className='bg-[#EDF2EE] py-2.5'>
                <div className="navbar flex justify-between items-center container mx-auto ">
                    <div className="">
                        <div className='logo'>
                            <Link to='/'><img src={logo} alt="Logo" /></Link>
                        </div>
                    </div>
                    <div className='search-bar hidden sm:flex'>
                        <input type="text" className='border-2 border-[#FF8A00] rounded-lg rounded-e-none py-2.5 ps-3' placeholder='Search here' />
                        <div className='border-2 border-[#FF8A00] border-s-0 rounded-e-lg py-2.5 px-2.5'>
                            <FiSearch className='text-2xl'></FiSearch>
                        </div>
                    </div>
                    <div className="">
                        <FaRegHeart className='text-4xl text-[#808080] me-2.5'></FaRegHeart>
                        <HiOutlineShoppingCart className='text-4xl text-[#808080]'></HiOutlineShoppingCart>
                    </div>
                </div>
            </div>

            {/*//////////////// NAVBAR //////////////// */}

            <div className="navbar justify-between container mx-auto px-5 lg:px-0 py-3 bg-base-100">
                <div className="lg:hidden">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {menuItem}
                        </ul>
                    </div>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-0">
                        {menuItem}
                    </ul>
                </div>



                {/* //////////////////// IF USER LOGIN THEN WHAT I NEED TO SHOW /////////////////////// */}

                {
                    user?.uid ?
                        <div>
                            <div className='me-3'>
                                <button className='btn bg-[#EDF2EE]'><Link to='/login' onClick={handleSignOut} className='text-xl text-[#666666] capitalize'>Logout</Link></button>
                            </div>
                            <div className="dropdown dropdown-end">
                                <label tabIndex={0} className=" rounded-full m-1 flex justify-center items-center text-5xl text-[#666666] cursor-pointer"><CgProfile></CgProfile></label>
                                <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-72">
                                    <div className='px-[8px] mt-3 flex items-center'>
                                        <div className='w-10 h-10 bg-red-500 rounded-full me-2.5'></div>
                                        <div className=''>
                                            <h2 className='mb-2 font-semibold'>promit mojumder mondol</h2>
                                            <p className='text-[#808080]'>+880171455</p>
                                        </div>
                                    </div>
                                    <li><Link to='' className='font-semibold'>My Orders</Link></li>
                                    <li><Link to='' className='font-semibold'>Profiles</Link></li>
                                    <li><Link to='' onClick={handleSignOut} className='font-semibold'>Logout</Link></li>
                                </ul>
                            </div>
                        </div>
                        :
                        <div>
                            <div className='me-3'>
                                <button className='btn bg-[#EDF2EE]'><Link to='/login' className='text-xl text-[#666666] capitalize'>Login</Link></button>
                            </div>
                            <div className=' '>
                                <Link to='/login' className='text-4xl text-[#666666]'><CgProfile></CgProfile></Link>
                            </div>
                        </div>

                }

                {/* <div>
                    <div className='me-3'>
                        <button className='btn bg-[#EDF2EE]'><Link to='/login' className='text-xl text-[#666666] capitalize'>Login</Link></button>
                    </div>
                    <div className=' '>
                        <Link to='/login' className='text-4xl text-[#666666]'><CgProfile></CgProfile></Link>
                    </div>
                </div> */}

                {/* <div>
                    <div className='me-3'>
                        <button className='btn bg-[#EDF2EE]'><Link to='/login' className='text-xl text-[#666666] capitalize'>Logout</Link></button>
                    </div>
                    <div className="dropdown dropdown-end">
                        <label tabIndex={0} className=" rounded-full m-1 flex justify-center items-center text-5xl text-[#666666] cursor-pointer"><CgProfile></CgProfile></label>
                        <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-72">
                            <div className='px-[8px] mt-3 flex items-center'>
                                <div className='w-10 h-10 bg-red-500 rounded-full me-2.5'></div>
                                <div className=''>
                                    <h2 className='mb-2 font-semibold'>promit mojumder mondol</h2>
                                    <p className='text-[#808080]'>+880171455</p>
                                </div>
                            </div>
                            <li><Link to='' className='font-semibold'>My Orders</Link></li>
                            <li><Link to='' className='font-semibold'>Profiles</Link></li>
                            <li><Link to='' onClick={handleSignOut} className='font-semibold'>Logout</Link></li>
                        </ul>
                    </div>
                </div> */}



            </div>

        </header >
    );
};

export default Header;