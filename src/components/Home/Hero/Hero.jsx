import React, { useContext } from 'react';
import './Hero.css';
import Slider from "react-slick";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { AuthContext } from '../../../context/AuthProvider';
import banner from '../../../assets/images/banner-6.png';
import truk from '../../../assets/icons/delivery-truck.png'
import Fetured from './Fetured/Fetured';



const Hero = () => {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    return (
        <div className='pb-32'>
            <div className='hero-section relative'>
                <Slider {...settings}>
                    <div className='banner px-5 overflow-hidden'>
                        <div className="hero container mx-auto bg-[#EDF2EE] pt-24 pb-52 px-5 rounded-[8px] overflow-hidden">
                            <div className="hero-content justify-between flex-col lg:flex-row-reverse gap-14 max-w-none">
                                <img src={banner} className=" lg:w-1/2 w-1/2" />
                                <div className='text-center lg:text-left'>
                                    <h5 className='text-sm text-[#00B207] mb-2.5'>Welcome to shopery</h5>
                                    <h1 className='text-5xl text-[#002603] font-semibold max-w-[540px] mb-7'>Fresh & Healthy Organic Food</h1>
                                    <h3 className='text-3xl text-[#002603] mb-3'>Sale up to <span className='text-[#002603]'>30% OFF</span></h3>
                                    <p className='text-lg text-[#618062] mb-8'>Free shipping on all your order. we deliver, you enjoy</p>
                                    <button className='btn bg-[#00B207] text-white rounded-[53px] px-10 py-4'>Shop now <FontAwesomeIcon icon={faArrowRight} /></button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="banner">
                        <div className="hero container mx-auto bg-[#EDF2EE] pt-24 pb-52 rounded-[8px]">
                            <div className="hero-content justify-between flex-col lg:flex-row-reverse gap-14 max-w-none">
                                <img src={banner} className=" lg:w-1/2 " />
                                <div className='text-center lg:text-left'>
                                    <h5 className='text-sm text-[#00B207] mb-2.5'>Welcome to shopery</h5>
                                    <h1 className='text-5xl text-[#002603] font-semibold max-w-[540px] mb-7'>Fresh & Healthy Organic Food</h1>
                                    <h3 className='text-3xl text-[#002603] mb-3'>Sale up to <span className='text-[#002603]'>30% OFF</span></h3>
                                    <p className='text-lg text-[#618062] mb-8'>Free shipping on all your order. we deliver, you enjoy</p>
                                    <button className='btn bg-[#00B207] text-white rounded-[53px] px-10 py-4'>Shop now <FontAwesomeIcon icon={faArrowRight} /></button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="banner">
                        <div className="hero container mx-auto bg-[#EDF2EE] pt-24 pb-52 rounded-[8px]">
                            <div className="hero-content justify-between flex-col lg:flex-row-reverse gap-14 max-w-none">
                                <img src={banner} className=" lg:w-1/2 " />
                                <div className='text-center lg:text-left'>
                                    <h5 className='text-sm text-[#00B207] mb-2.5'>Welcome to shopery</h5>
                                    <h1 className='text-5xl text-[#002603] font-semibold max-w-[540px] mb-7'>Fresh & Healthy Organic Food</h1>
                                    <h3 className='text-3xl text-[#002603] mb-3'>Sale up to <span className='text-[#002603]'>30% OFF</span></h3>
                                    <p className='text-lg text-[#618062] mb-8'>Free shipping on all your order. we deliver, you enjoy</p>
                                    <button className='btn bg-[#00B207] text-white rounded-[53px] px-10 py-4'>Shop now <FontAwesomeIcon icon={faArrowRight} /></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </Slider>


                <div className='absolute bottom-[-13%]  left-0 w-full z-10 invisible lg:visible'>
                    <Fetured></Fetured>
                </div>
            </div>
        </div>
    );
};

export default Hero;