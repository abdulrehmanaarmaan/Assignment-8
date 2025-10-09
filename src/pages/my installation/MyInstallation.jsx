import { useLoaderData } from 'react-router';
import { getInstalledApps } from '../../utility/localStorage';
import InstalledApp from '../installed app/InstalledApp';
import { useEffect } from 'react';
import { useState } from 'react';

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

            <div className='flex justify-between mb-4 px-20'>
                <h1 className='text-2xl font-semibold text-[#001931]'>{downloadedApps.length} {downloadedApps.length < 2 ? 'App Found' : 'Apps Found'}</h1>

                <details className="dropdown">
                    <summary className="btn m-1 text-[#627382] font-normal">Sort By Downloads</summary>
                    <ul className="menu dropdown-content bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                        <li onClick={() => sortApps('High-Low')}><a>High-Low</a></li>
                        <li onClick={() => sortApps('Low-High')}><a>Low-High</a></li>
                    </ul>
                </details>
            </div>

            <div className='space-y-4'>
                {
                    downloadedApps.map(installedApp => <InstalledApp setInstalledApps={setInstalledApps} downloadedApps={downloadedApps} installedApp={installedApp} key={installedApp.id}></InstalledApp>)
                }
            </div>
        </div>
    );
};

export default MyInstallation;