import React, { useState } from 'react';
import { useLoaderData, useParams } from 'react-router';
import downloadLogo from '../../assets/icon-downloads.png'
import ratingLogo from '../../assets/icon-ratings.png'
import reviewLogo from '../../assets/Vector (1).png'
import { toast } from 'react-toastify';
import {getInstalledApps, setInstalledApps } from '../../utility/localStorage';
import AppChart from './app chart/AppChart';

const AppDetails = () => {
    const {appId} = useParams();
    const convertedIdType = Number(appId);

    const apps = useLoaderData();

    const clickedApp = apps.find(app => app.id === convertedIdType);
    console.log(clickedApp)

    const {image, title, companyName, ratings, downloads, ratingAvg, reviews, description, size, id} = clickedApp;

    const [installed, setInstalled] = useState(false);

    const installedApps = getInstalledApps();

    const handleInstall = id => {
        setInstalled(true)

        if (!installedApps.includes(id)) {
            toast('Installed')
        }

        setInstalledApps(id)
    }


    return (
        <div className='px-0 md:px-20'>
            <div className='flex flex-col lg:flex-row items-center gap-10'>
                <img className='[box-shadow:0px_10px_20px_-12px_rgba(0,0,0,0.1)] object-cover max-w-11/12 max-h-full w-11/12 h-full md:max-h-[375px] md:h-[375px] md:max-w-[375px] md:w-[375px]' src={image} alt="" />
                
                <div className='w-full text-center lg:text-left'>
                    <h1 className='text-[#001931] font-bold text-[32px]'>{title}</h1>

                    <h1 className='mt-2 mb-7.5 font-bold text-xl text-[#627382]'>Developed by <span className='bg-gradient-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent'>{companyName}</span></h1>

                    <div className='border-1 border-[#001931] mb-7.5'></div>

                    <div className='flex gap-15 flex-col lg:flex-row'>
                        <div className=''>
                            <img className='max-w-10 w-10 max-h-10 h-10 mx-auto lg:mx-0' src={downloadLogo} alt="" />

                            <h1 className='text-[#001931] font-normal my-2'>Downloads</h1>

                            <h1 className='font-extrabold text-[40px] text-[#001931]'>{downloads}M</h1>
                        </div>

                        <div className=''>
                            <img className='max-w-10 w-10 max-h-10 h-10 mx-auto lg:mx-0' src={ratingLogo} alt="" />

                            <h1 className='text-[#001931] font-normal my-2'>Average Ratings</h1>

                            <h1 className='font-extrabold text-[40px] text-[#001931]'>{ratingAvg}</h1>
                        </div>

                        <div className=''>
                            <img className='max-w-10 w-10 max-h-10 h-10 mx-auto lg:mx-0' src={reviewLogo} alt="" />

                            <h1 className='text-[#001931] font-normal my-2'>Total Reviews</h1>

                            <h1 className='font-extrabold text-[40px] text-[#001931]'>{reviews}K</h1>
                        </div>
                    </div>

                    <button disabled={installed} onClick={() => handleInstall(id)} className='mt-15 lg:mt-7.5 px-5 py-3.5 bg-[#00D390] font-semibold text-xl rounded-sm text-white hover:cursor-pointer'>{installedApps.includes(id) ? 'Installed' : `Install Now (${size} MB)`}</button>
                </div>
            </div>

            <div className='border-1 border-[#001931] my-10'></div>

            <h1 className='text-[#001931] font-semibold text-2xl mb-6 text-center lg:text-left'>Ratings</h1>

            <AppChart ratings={ratings}></AppChart>

            <div className='border-1 border-[#818F9D] mt-10'></div>

            <h1 className='mt-10 mb-6 text-[#001931] font-semibold text-2xl text-center lg:text-left'>Description</h1>

            <p className='text-[#627382] text-xl font-normal text-center lg:text-left'>{description}</p>
            
        </div>
    );
};

export default AppDetails;