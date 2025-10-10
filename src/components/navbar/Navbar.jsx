import logo from '../../assets/logo.png'
import gitHubLogo from '../../assets/fi_2111432.png'
import { NavLink } from 'react-router';

const Navbar = () => {

    return (
        <div>
        <div className='flex flex-col md:flex-row py-[17.5px] px-20 justify-center md:justify-between items-center gap-8 md:gap-0'>
            <NavLink to='/'>
            <div className='flex gap-1 items-center'>
                <img className='max-w-10 max-h-10' src={logo} alt="" />

                <h1 className='font-bold bg-gradient-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent'>HERO.IO</h1>
            </div>
            </NavLink>

            <ul className='flex flex-col md:flex-wrap lg:flex-row gap-8 font-medium text-center lg:text-left'>
                <NavLink to='/' className={({isActive}) => `relative ${isActive && 'font-semibold bg-gradient-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent after:block after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-gradient-to-r after:from-[#632EE3] after:to-[#9F62F2]'}`}>
                   <li>Home</li>
                </NavLink>

               <NavLink to='/Apps' className={({isActive}) => `relative ${isActive && 'font-semibold bg-gradient-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent after:block after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-gradient-to-r after:from-[#632EE3] after:to-[#9F62F2]'}`}>
                   <li>Apps</li>
               </NavLink>

               <NavLink to='/My-Installation' className={({isActive}) => `relative ${isActive && 'font-semibold bg-gradient-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent after:block after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-gradient-to-r after:from-[#632EE3] after:to-[#9F62F2]'}`}>
                <li>Installation</li>
                </NavLink>
            </ul>

            <NavLink to='https://github.com/abdulrehmanaarmaan' className={'hover:cursor-pointer'}>
            <button className='flex gap-2.5 bg-gradient-to-r from-[#632EE3] to-[#9F62F2] py-[11.5px] px-[15.5px] rounded-sm hover:cursor-pointer'>
                <img className='max-w-5 max-h-5' src={gitHubLogo} alt="" />

                <h1 className='text-white font-semibold'>Contribute</h1>
            </button>
            </NavLink>

        </div>

        <div className='border-1 border-[#e9e9e9]'></div>
        </div>
    
    );
};

export default Navbar;