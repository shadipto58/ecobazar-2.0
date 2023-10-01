import React from 'react';
import icon1 from '../../../../assets/icons/delivery-truck.png';
import icon2 from '../../../../assets/icons/headphones.png';
import icon3 from '../../../../assets/icons/shopping-bag.png';
import icon4 from '../../../../assets/icons/package.png';

const Fetured = () => {
    return (
        <div className='flex justify-center'>
            <div className='flex justify-between items-center bg-white shadow-lg p-10 w-3/4 rounded-lg'>
                <div className='flex items-center'>
                    <img src={icon1} alt="" />
                    <div className='ms-4'>
                        <h3 className='text-[#1A1A1A] font-semibold'>Free Shipping</h3>
                        <p className='text-sm text-[#999999]'>Free shipping on all your order</p>
                    </div>
                </div>
                <div className='flex items-center'>
                    <img src={icon2} alt="" />
                    <div className='ms-4'>
                        <h3 className='text-[#1A1A1A] font-semibold'>Customer Support 24/7</h3>
                        <p className='text-sm text-[#999999]'>Instant access to Support</p>
                    </div>
                </div>
                <div className='flex items-center'>
                    <img src={icon3} alt="" />
                    <div className='ms-4'>
                        <h3 className='text-[#1A1A1A] font-semibold'>100% Secure Payment</h3>
                        <p className='text-sm text-[#999999]'>We ensure your money is save</p>
                    </div>
                </div>
                <div className='flex items-center'>
                    <img src={icon4} alt="" />
                    <div className='ms-4'>
                        <h3 className='text-[#1A1A1A] font-semibold'>Money-Back Guarantee</h3>
                        <p className='text-sm text-[#999999]'>30 Days Money-Back Guarantee</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Fetured;