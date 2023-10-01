import React from 'react';
import CategorieCard from './CategorieCard/CategorieCard';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const Categorie = () => {
    return (
        <div className='my-12'>
            <div className='container mx-auto'>
                <div className='flex justify-between items-center mb-8 sm:p-0 p-4'>
                    <h2 className='text-[32px] text-[#1A1A1A] font-semibold'>Popular Categories <span></span></h2>
                    <p className='text-[#00B207] font-medium'>View All <FontAwesomeIcon icon={faArrowRight} /></p>
                </div>
                <div className='grid lg:grid-cols-6 sm:grid-cols-4 grid-cols-2 gap-4 sm:p-0 p-4'>
                    <CategorieCard></CategorieCard>
                    <CategorieCard></CategorieCard>
                    <CategorieCard></CategorieCard>
                    <CategorieCard></CategorieCard>
                    <CategorieCard></CategorieCard>
                    <CategorieCard></CategorieCard>
                    <CategorieCard></CategorieCard>
                    <CategorieCard></CategorieCard>
                    <CategorieCard></CategorieCard>
                    <CategorieCard></CategorieCard>
                    <CategorieCard></CategorieCard>
                    <CategorieCard></CategorieCard>
                </div>
            </div>
        </div>
    );
};

export default Categorie;