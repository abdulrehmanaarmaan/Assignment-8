import React, { Suspense } from 'react';
import { useLoaderData } from 'react-router';
import TopApp from '../../components/top app/TopApp';
import App from '../app/App';

const Apps = () => {
    const apps = useLoaderData();

    return (
        <div className='text-center'>
            <h1 className='font-bold text-5xl text-[#001931]'>Our All Applications</h1>

            <p className='mt-4 mb-10 font-normal text-xl text-[#627382]'>Explore All Apps on the Market developed by us. We code for Millions</p>

            <div className='flex justify-between px-20 items-center mb-4'>
                <h1 className='font-semibold text-2xl text-[#001931]'>({apps.length}) Apps Found</h1>


                 <label className="input">
                     <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                     <g
                     strokeLinejoin="round"
                     strokeLinecap="round"
                     strokeWidth="2.5"
                     fill="none"
                     stroke="currentColor"
                      >
                    <circle cx="11" cy="11" r="8"></circle>
                    <path d="m21 21-4.3-4.3"></path>
                     </g>
                     </svg>
                     <input type="search" required placeholder="Search" />
                   </label>
            </div>

            <div className='grid grid-cols-4 gap-4 max-w-[1440px] mx-auto'>
                <Suspense fallback={<span>Loading...</span>}>
                    {
                        apps.map(app => <App app={app} key={app.id}></App>)
                    }
                </Suspense>
            </div>
            
        </div>
    );
};

export default Apps;