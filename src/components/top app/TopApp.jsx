import React from 'react';
import downloadLogo from '../../assets/Group (1).png'
import ratingLogo from '../../assets/fi_1828884.png'
import { NavLink } from 'react-router';

const TopApp = ({topApp}) => {
    const {image, title, downloads, ratingAvg, id} = topApp;

    return (
        <NavLink to={`/App-Details/${id}`}>
        <div className='bg-white p-4 rounded-sm max-w-[348px] [box-shadow:0px_10px_20px_-12px_rgba(0,0,0,0.1)]'>
            <img className='rounded-lg w-full max-h-[316px] h-[316px] object-cover' src={image} alt="" />

            <h1 className='my-4 text-center font-medium text-xl text-[#001931]'>{title}</h1>

            <div className='flex justify-between'>
                <div className='flex gap-2 py-1.5 px-2.5 rounded-sm bg-[#F1F5E8] items-center'>
                    <div className='max-w-4 max-h-4'>
                        <img className='w-full h-full' src=    {downloadLogo} alt="" />
                    </div>
                    <span className='text-[#00D390] font-medium'>{downloads}M</span>
                </div>

                <div className='flex gap-2 py-1.5 px-2.5 rounded-sm bg-[#FFF0E1] items-center'>
                    <div className='flex max-w-4 max-h-4 items-center'>
                        <img className='w-full h-full' src={ratingLogo} alt="" />
                    </div>

                    <span className='text-[#FF8811] font-medium'>{ratingAvg}</span>
                </div>
            </div>
        </div>
        </NavLink>
    );
};

export default TopApp;