import React, { useState } from 'react';
import { useLoaderData, useParams } from 'react-router';
import downloadLogo from '../../assets/Group (1).png'
import ratingLogo from '../../assets/fi_1828884.png'
import reviewLogo from '../../assets/Vector (1).png'
import { toast } from 'react-toastify';
import {getInstalledApps, setInstalledApps } from '../../utility/localStorage';

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
        <div className='px-20'>
            <div className='flex items-center gap-10'>
                <img className='[box-shadow:0px_10px_20px_-12px_rgba(0,0,0,0.1)] max-[375px] w-[375px] max-h-[375px] h-[375px]' src={image} alt="" />

                <div className='w-full'>
                    <h1 className='text-[#001931] font-bold text-[32px]'>{title}</h1>

                    <h1 className='mt-2 mb-7.5 font-bold text-xl text-[#627382]'>Developed by <span className='bg-gradient-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent'>{companyName}</span></h1>

                    <div className='border-1 border-[#001931] mb-7.5'></div>

                    <div className='flex gap-15'>
                        <div>
                            <img className='max-w-10 w-10 max-h-10 h-10' src={downloadLogo} alt="" />

                            <h1 className='text-[#001931] font-normal my-2'>Downloads</h1>

                            <h1 className='font-extrabold text-[40px] text-[#001931]'>{downloads}M</h1>
                        </div>

                        <div>
                            <img className='max-w-10 w-10 max-h-10 h-10' src={ratingLogo} alt="" />

                            <h1 className='text-[#001931] font-normal my-2'>Average Ratings</h1>

                            <h1 className='font-extrabold text-[40px] text-[#001931]'>{ratingAvg}</h1>
                        </div>

                        <div>
                            <img className='max-w-10 w-10 max-h-10 h-10' src={reviewLogo} alt="" />

                            <h1 className='text-[#001931] font-normal my-2'>Total Reviews</h1>

                            <h1 className='font-extrabold text-[40px] text-[#001931]'>{reviews}K</h1>
                        </div>
                    </div>

                    <button disabled={installed} onClick={() => handleInstall(id)} className='mt-7.5 px-5 py-3.5 bg-[#00D390] font-semibold text-xl rounded-sm text-white hover:cursor-pointer'>{installedApps.includes(id) ? 'Installed' : `Install Now (${size} MB)`}</button>
                </div>
            </div>

            <div className='border-1 border-[#001931] my-10'></div>

            <h1 className='text-[#001931] font-semibold text-2xl'>Ratings</h1>

            <div></div>

            <h1 className='mt-10 mb-6 text-[#001931] font-semibold text-2xl'>Description</h1>

            <p className='text-[#627382] text-xl font-normal'>{description}</p>
            
        </div>
    );
};

export default AppDetails;