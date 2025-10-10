import React, { Suspense } from 'react';
import TopApp from '../top app/TopApp';
import { NavLink } from 'react-router';

const TopPages = ({appData}) => {

    const topApps = appData.slice(0, 8);

    return (
        <div className='text-center'>
            <h1 className='mb-4 font-bold text-5xl text-[#001931]'>Trending Apps</h1>

            <p className='mb-10 text-[#627382] text-xl'>Explore All Trending Apps on the Market developed by us</p>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-full md:max-w-[1440px] mx-auto mb-10 px-4'>
                <Suspense fallback={<span>loading...</span>}>
                    {
                        topApps.map(topApp => <TopApp topApp={topApp} key={topApp.id}></TopApp>)
                    }
                 </Suspense>
            </div>

        <NavLink to='/Apps'>
            <button className='bg-gradient-to-r from-[#632EE3] to-[#9F62F2] rounded-sm text-white font-semibold py-[14.5px] px-[39px] hover:cursor-pointer'>Show All</button>
        </NavLink>
        </div>
    );
};

export default TopPages;