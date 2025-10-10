import React from 'react';
import playStoreLogo from '../../assets/fi_16076057.png'
import appStoreLogo from '../../assets/fi_5977575.png'
import { NavLink } from 'react-router';

const Banner = () => {
    return (
        <div className='text-center mb-10'>
            <h1 className='text-5xl md:text-7xl font-semibold text-[#001931] max-w-full md:max-w-[597px] mx-auto'>We Build <span className='bg-gradient-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent'>Productive</span> Apps</h1>

            <p className='text-xl text-[#627382] font-normal max-w-full md:max-w-[950px] mx-auto mt-4 mb-10'>At HERO.IO, we craft innovative apps designed to make 
            everyday life simpler, smarter, and more exciting. Our 
            goal is to turn your ideas into digital experiences that 
            truly make an impact.</p>
            
            <div className='flex flex-col md:flex-row gap-4 justify-center'>
                <NavLink to='https://play.google.com/store/games?hl=en' className={'hover:cursor-pointer'}>
                <button className='flex gap-1 py-3 px-6 items-center rounded-sm border-1 border-[#d2d2d2] hover:cursor-pointer mx-auto md:mx-0'>
                    <img src={playStoreLogo} alt="" />

                    <h1 className='font-semibold text-xl'>Google Play</h1>
                </button>
                </NavLink>

                <NavLink to='https://www.apple.com/app-store/' className={'hover:cursor-pointer'}>
                <button className='flex gap-1 py-3 px-6 items-center rounded-sm border-1 border-[#d2d2d2] hover:cursor-pointer mx-auto md:mx-0'>
                    <img src={appStoreLogo} alt="" />

                    <h1 className='font-semibold text-xl'>App Store</h1>
                </button>
                </NavLink>
            </div>
            
        </div>
    );
};

export default Banner;