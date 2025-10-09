import React from 'react';
import downloadLogo from '../../assets/icon-downloads.png'
import ratingsLogo from '../../assets/icon-ratings.png'
import { removeInstalledApp } from '../../utility/localStorage';
import { toast } from 'react-toastify';

const InstalledApp = ({setInstalledApps, downloadedApps, installedApp}) => {
    const {image, title, downloads, ratingAvg, size, id} = installedApp;

    const uninstallApp = id => {
        removeInstalledApp(id)

        toast('Uninstalled')

        const filteredApps = downloadedApps.filter(downloadedApp => downloadedApp.id !== id);
        setInstalledApps(filteredApps)
    }

    return (
        <div className='flex bg-white rounded-sm p-4 justify-between items-center max-w-[1440px] mx-auto'>
            <div className='flex gap-4 items-center'>
                <img className='rounded-lg max-w-20' src={image} alt="" />

                <div>
                    <h1 className='font-medium text-xl text-[#001931] mb-4 text-left'>{title}</h1>

                    <div className='flex gap-4'>
                        <div className='flex items-center gap-1'>
                            <span className='flex max-h-4 max-w-4 items-center'>
                                <img className='w-full h-full' src={downloadLogo} alt="" />
                            </span>

                            <h1 className='text-[#00d390] font-medium'>{downloads} M</h1>
                        </div>

                        <div className='flex items-center gap-1'>
                            <span className='flex max-h-4 max-w-4 items-center'>
                                <img className='w-full h-full' src={ratingsLogo} alt="" />
                            </span>

                            <h1 className='text-[#ff8811] font-medium'>{ratingAvg}</h1>
                        </div>

                        <h1 className='text-[#627382] font-normal'>{size} MB</h1>
                    </div>
                </div>
            </div>

            <button onClick={() => uninstallApp(id)} className='font-semibold text-white py-3 px-4 rounded-sm bg-[#00D390] max-h-[43px] hover: cursor-pointer'>Uninstall</button>
        </div>
    );
};

export default InstalledApp;