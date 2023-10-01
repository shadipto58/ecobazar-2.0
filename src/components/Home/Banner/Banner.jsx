import React from 'react';
import './Banner.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const Banner = () => {
    return (
        <div>
            <div className='banner-wrapper container mx-auto'>
                <div className='banner-left'>
                    <h2>Fresh & Healthy <br /> Organic Food</h2>
                    <h3>Sale up to <span>30% OFF</span></h3>
                    <p>Free shipping on all your order.</p>
                    <button>Shop now <FontAwesomeIcon icon={faArrowRight} /></button>
                </div>
                <div className='banner-right'>
                    <div></div>
                    <div></div>
                </div>
            </div>
        </div>
    );
};

export default Banner;