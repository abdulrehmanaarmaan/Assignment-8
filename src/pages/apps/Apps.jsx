import React, { Suspense, useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';
import TopApp from '../../components/top app/TopApp';
import App from '../app/App';
import NoAppFound from '../no app found/NoAppFound';
import { TailSpin } from 'react-loader-spinner';

const Apps = () => {
    const apps = useLoaderData();

    const [search, setSearch] = useState('');
    const [loading, setLoading] = useState(false);
    const searchedApp = search.trim().toLowerCase();
    const priorApps = searchedApp ? apps.filter(app => app.title.toLowerCase().includes(searchedApp)) : apps 

    const handleChange = (e) => {
        setSearch(e.target.value);
        setLoading(true);

        setTimeout(() => {
            setLoading(false);
        }, 1000)
    }

    return (
        <div className='text-center'>
            <h1 className='font-bold text-5xl text-[#001931]'>Our All Applications</h1>

            <p className='mt-4 mb-10 font-normal text-xl text-[#627382]'>Explore All Apps on the Market developed by us. We code for Millions</p>

            <div className='flex flex-col md:flex-row justify-between px-0 md:px-4 lg:px-20 items-center mb-4'>
                <h1 className='font-semibold text-2xl text-[#001931] mb-4 md:mb-0'>({priorApps.length}) {priorApps.length > 1 ? 'Apps Found' : 'App Found'}</h1>

                 <label className="input w-11/12 md:w-auto">
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
                     <input value={search} onChange={handleChange} type="search" required placeholder="search Apps" />
                </label>
            </div>

            {loading ? (<div className='flex justify-center mt-auto'><TailSpin visible={true} height="80" width="80" color="#4fa94d" ariaLabel="tail-spin-loading" radius="1" wrapperStyle={{}} wrapperClass=""></TailSpin></div>) : priorApps.length === 0 ? (<NoAppFound setSearch={setSearch}></NoAppFound>) : (<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-full md:max-w-[1440px] mx-auto px-4'>
                <Suspense fallback={<span>Loading...</span>}>
                    {
                        priorApps.map(app => <App app={app} key={app.id}></App>)
                    }
                </Suspense>
            </div>)
            }
            
        </div>
    );
};

export default Apps;