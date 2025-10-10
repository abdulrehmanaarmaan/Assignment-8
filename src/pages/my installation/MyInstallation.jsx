import { useLoaderData } from 'react-router';
import { getInstalledApps } from '../../utility/localStorage';
import InstalledApp from '../installed app/InstalledApp';
import { useEffect } from 'react';
import { useState } from 'react';
import { IoMdArrowDropdown } from 'react-icons/io';

const MyInstallation = () => {
    const apps = useLoaderData();

    const [downloadedApps, setInstalledApps] = useState([]);

    const [sort, sortBy] = useState('');

    useEffect(() => {
    const installedApps = getInstalledApps();

    const convertedElTypes = installedApps.map(installedAppId => Number(installedAppId))

    const filteredApps = apps.filter(app => convertedElTypes.includes(app.id))
    
    setInstalledApps(filteredApps)
    }, [])

    const sortApps = sortOption => {
        sortBy(sortOption)

        if (sortOption === 'High-Low') {
            const decreasedByDownloads = [...downloadedApps].sort((a, b) => b.downloads - a.downloads);
            setInstalledApps(decreasedByDownloads)
        }

        else if (sortOption === 'Low-High') {
            const increasedByDownloads = [...downloadedApps].sort((a, b) => a.downloads - b.downloads);
            setInstalledApps(increasedByDownloads)
        }
    }
    
    return (
        <div className='text-center'>
            <h1 className='font-bold text-5xl text-[#001931]'>Your Installed Apps</h1>

            <p className='font-normal text-xl text-[#627382] mt-4 mb-10'>Explore All Trending Apps on the Market developed by us</p>

            <div className='flex flex-col md:flex-row justify-between mb-4 px-0 md:px-20 items-center gap-4 md:gap-0'>
                <h1 className='text-2xl font-semibold text-[#001931]'>{downloadedApps.length} {downloadedApps.length < 2 ? 'App Found' : 'Apps Found'}</h1>

                <details className="dropdown">
                    <summary className="btn m-1 text-[#627382] font-normal">Sort By Downloads <IoMdArrowDropdown className='max-w-7.5 w-7.5 h-7.5 max-h-7.5'></IoMdArrowDropdown></summary>
                    <ul className="menu dropdown-content bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                        <li onClick={() => sortApps('High-Low')}><a className='mx-auto md:mx-0'>High-Low</a></li>
                        <li onClick={() => sortApps('Low-High')}><a className='mx-auto md:mx-0'>Low-High</a></li>
                    </ul>
                </details>
            </div>

            <div className='space-y-4 px-4 md:px-20'>
                {
                    downloadedApps.map(installedApp => <InstalledApp setInstalledApps={setInstalledApps} downloadedApps={downloadedApps} installedApp={installedApp} key={installedApp.id}></InstalledApp>)
                }
            </div>
        </div>
    );
};

export default MyInstallation;