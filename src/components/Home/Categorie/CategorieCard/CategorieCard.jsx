import React from 'react';

import image from '../../../../assets/images/image-1.png'

const CategorieCard = () => {
    return (

        <div className=''>
            <div className='categorie-item border-2 hover:border-[#2C742F] rounded-lg hover:cursor-pointer'>
                <img src={image} className='my-4 mx-auto' alt="" />
                <p className='text-lg text-center text-[#1A1A1A] font-medium mb-6'>Fresh fruit</p>
            </div>
        </div>

    );
};

export default CategorieCard;