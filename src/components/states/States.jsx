import React from 'react';
import heroImage from '../../assets/hero.png'

const States = () => {
    return (
        <div className='mb-20'>
            <img className='mx-auto' src={heroImage} alt="" />

            <div className='bg-gradient-to-r from-[#632EE3] to-[#9F62F2] py-20 text-white'>
                <h1 className='font-bold text-5xl text-center mb-20 md:mb-20 lg:mb-10'>Trusted by Millions, Built for You</h1>

                <div className='flex flex-col md:flex-col lg:flex-row justify-center'>
                    <div className='text-center'>
                        <h1 className='font-normal'>Total Downloads</h1>

                        <h1 className='font-extrabold text-[64px] my-4'>29.6M</h1>

                        <h1 className='font-normal'>21% more than last month</h1>
                    </div>
                    
                    <div className='text-center mr-0 md:mr-[197.5px] ml-0 md:ml-[176.5px] my-20 md:my-20 lg:my-0'>
                        <h1 className='font-normal'>Total Reviews</h1>

                        <h1 className='font-extrabold text-[64px] my-4'>906K</h1>

                        <h1 className='font-normal'>46% more than last month</h1>
                    </div>

                    <div className='text-center'>
                        <h1 className='font-normal'>Active Apps</h1>

                        <h1 className='font-extrabold text-[64px] my-4'>132+</h1>

                        <h1 className='font-normal'>31 more will Launch</h1>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default States;