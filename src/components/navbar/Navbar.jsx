import React, { useState } from 'react';
import logo from '../../assets/logo.png'
import gitHubLogo from '../../assets/fi_2111432.png'
import { NavLink } from 'react-router';

const Navbar = () => {
    const [link, setLink] = useState('');
    
    return (
        <div>
        <div className='flex py-[17.5px] px-20 justify-between items-center'>
            <div className='flex gap-1 items-center'>
                <img className='max-w-10 max-h-10' src={logo} alt="" />

                <h1 className='font-bold bg-gradient-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent'>HERO.IO</h1>
            </div>

            <ul className='flex gap-8 font-medium'>
                <NavLink to='/' onClick={() => setLink('Home')}>
                   <li className={link === 'Home' ? 'font-semibold bg-gradient-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent underline decoration-[#9F62F2]' : ''}>Home</li>
                </NavLink>

               <NavLink to='/Apps' onClick={() => setLink('Apps')}>
                   <li className={link === 'Apps' ? 'font-semibold bg-gradient-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent underline decoration-[#9F62F2]' : ''}>Apps</li>
               </NavLink>

               <NavLink to='/My-Installation' onClick={() => setLink('Installation')}>
                <li className={link === 'Installation' ? 'font-semibold bg-gradient-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent underline decoration-[#9F62F2]' : ''}>Installation</li>
                </NavLink>
            </ul>

            <button className='flex gap-2.5 bg-gradient-to-r from-[#632EE3] to-[#9F62F2] py-[11.5px] px-[15.5px] rounded-sm border-hidden'>
                <img className='max-w-5 max-h-5' src={gitHubLogo} alt="" />

                <h1 className='text-white font-semibold'>Contribute</h1>
            </button>
        </div>

        <div className='border-1 border-[#e9e9e9]'></div>
        </div>
    
    );
};

export default Navbar;