import React from 'react';
import appLogo from '../../assets/logo.png'
import twitterLogo from '../../assets/Frame 1171277687.png'
import linkedinLogo from '../../assets/Frame 1171277689.png'
import facebookLogo from '../../assets/fi_5968764 (1).png'

const Footer = () => {
    return (
        <div className='text-white bg-[#001931] pt-[35px] pb-7.5 px-20 text-center mt-auto'>
            <div className='flex justify-between pr-[107px]'>
                <div className='flex gap-1 items-center'>
                    <img className='max-w-10 max-h-10' src={appLogo} alt="" />

                    <h1 className='font-bold'>HERO.IO</h1>
                </div>

                <div>
                    <h1 className='font-medium text-xl'>Social Links</h1>

                    <div className='flex gap-4 mt-4'>
                        <img src={twitterLogo} alt="" />
                        <img src={linkedinLogo} alt="" />
                        <img src={facebookLogo} alt="" />
                    </div>
                </div>
            </div>

            <div className='border-1 border-[#e5e7eb] mb-7.5'></div>

            <span className='font-normal'>Copyright © 2025 - All right reserved</span>
        </div>
    );
};

export default Footer;