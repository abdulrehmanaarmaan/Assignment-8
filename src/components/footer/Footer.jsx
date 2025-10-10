import React from 'react';
import appLogo from '../../assets/logo.png'
import twitterLogo from '../../assets/Frame 1171277687.png'
import linkedinLogo from '../../assets/Frame 1171277689.png'
import facebookLogo from '../../assets/fi_5968764 (1).png'

const Footer = () => {
    return (
        <div className='text-white bg-[#001931] pt-[35px] pb-8 md:pb-7.5 px-0 md:px-20 text-center mt-auto'>
            <div className='flex flex-col md:flex-row justify-between pr-0 md:pr-0 lg:pr-[107px] gap-8 md:gap-0'>
                <div className='flex gap-1 items-center mx-auto md:mx-0'>
                    <img className='max-w-10 max-h-10' src={appLogo} alt="" />

                    <h1 className='font-bold'>HERO.IO</h1>
                </div>

                <div className='mx-auto md:mx-0 mb-8 md:mb-0'>
                    <h1 className='font-medium text-xl'>Social Links</h1>

                    <div className='flex gap-4 mt-8 md:mt-4 mx-auto md:mx-auto lg:mx-0 w-11/12 md:w-11/12 lg:w-auto'>
                        <img src={twitterLogo} alt="" />
                        <img src={linkedinLogo} alt="" />
                        <img src={facebookLogo} alt="" />
                    </div>
                </div>
            </div>

            <div className='border-1 border-[#e5e7eb] mb-8 md:mb-7.5'></div>

            <span className='font-normal'>Copyright © 2025 - All right reserved</span>
        </div>
    );
};

export default Footer;