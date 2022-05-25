import React from 'react';
import banner1 from '../../images/banner/banner-1.jpg';
import banner2 from '../../images/banner/banner-2.jpg';
import banner3 from '../../images/banner/banner-3.jpg';

const Banner = () => {
    return (
        <div className=' grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1  gap-4'>
            <div className=''>
                <img className='lg:h-96 h-24 lg:w-auto w-96' src={banner1} alt="" />
                
            </div>
            <div className=''>
                <img className='lg:h-96 h-24 lg:w-auto w-96' src={banner2} alt="" />

            </div>
        </div>
    );
};

export default Banner;