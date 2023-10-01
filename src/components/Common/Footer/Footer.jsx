import React from 'react';
import { FaLinkedinIn, FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import logo from '../../../assets/icons/logo-2.png';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer>
            <div className='bg-[#1A1A1A]'>
                <div className='flex flex-col gap-10 lg:flex-row justify-between items-center container mx-auto py-20 px-5'>
                    <div className=''>
                        <div className='mb-10'>
                            <img src={logo} alt="Logo" />
                        </div>
                        <p className='text-sm text-[#808080] max-w-[336px]'>Morbi cursus porttitor enim lobortis molestie. Duis gravida turpis dui, eget bibendum magna congue nec.</p>
                        <div className="flex items-center mt-10">
                            <Link to=''>
                                <div className='w-14 h-14 bg-white hover:bg-[#00B207] hover:text-white transition-all flex justify-center items-center rounded-full text-2xl me-3'>
                                    <FaFacebookF />
                                </div>
                            </Link>
                            <Link to=''>
                                <div className='w-14 h-14 bg-white hover:bg-[#00B207] hover:text-white transition-all flex justify-center items-center rounded-full text-2xl me-3'>
                                    <FaLinkedinIn />
                                </div>
                            </Link>
                            <Link to=''>
                                <div className='w-14 h-14 bg-white hover:bg-[#00B207] hover:text-white transition-all flex justify-center items-center rounded-full text-2xl me-3'>
                                    <FaInstagram />
                                </div>
                            </Link>
                            <Link to=''>
                                <div className='w-14 h-14 bg-white hover:bg-[#00B207] hover:text-white transition-all flex justify-center items-center rounded-full text-2xl me-3'>
                                    <FaTwitter />
                                </div>
                            </Link>
                        </div>
                    </div>

                    <div className='grid grid-cols-2 lg:grid-cols-4 gap-20'>
                        <div className='flex flex-col gap-3'>
                            <h2 className='text-white text-xl font-medium'>My Account</h2>
                            <Link to='' className='text-sm text-[#999999]'>Shoping Cart</Link>
                            <Link to='' className='text-sm text-[#999999]'>Order History</Link>
                            <Link to='' className='text-sm text-[#999999]'>Wishlist</Link>
                        </div>
                        <div className='flex flex-col gap-3'>
                            <h2 className='text-white text-xl font-medium'>Helps</h2>
                            <Link to='' className='text-sm text-[#999999]'>Contact</Link>
                            <Link to='' className='text-sm text-[#999999]'>Faqs</Link>
                            <Link to='' className='text-sm text-[#999999]'>Terms & Condition</Link>
                        </div>
                        <div className='flex flex-col gap-3'>
                            <h2 className='text-white text-xl font-medium'>Categories</h2>
                            <Link to='' className='text-sm text-[#999999]'>Fruit & Vegetables</Link>
                            <Link to='' className='text-sm text-[#999999]'>Meat & Fish</Link>
                            <Link to='' className='text-sm text-[#999999]'>Bread & Bakery</Link>
                            <Link to='' className='text-sm text-[#999999]'>Beauty & Health</Link>
                        </div>
                        <div className='flex flex-col gap-3'>
                            <h2 className='text-white text-xl font-medium'>Proxy</h2>
                            <Link to='' className='text-sm text-[#999999]'>About</Link>
                            <Link to='' className='text-sm text-[#999999]'>Shop</Link>
                            <Link to='' className='text-sm text-[#999999]'>Product</Link>
                            <Link to='' className='text-sm text-[#999999]'>Track Order</Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className='bg-[#1A1A1A] '>
                <div className='py-8 border-t-2 border-[#808080] container mx-auto'>
                    <p className='text-sm text-[#808080] text-center'>Ecobazar eCommerce © 2021. All Rights Reserved</p>
                </div>
            </div>

        </footer>
    );
};

export default Footer;