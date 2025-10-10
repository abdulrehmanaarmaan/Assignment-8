import React from 'react';
import downloadLogo from '../../assets/icon-downloads.png'
import ratingsLogo from '../../assets/icon-ratings.png'
import { removeInstalledApp } from '../../utility/local-storage';
import { toast } from 'react-toastify';

const InstalledApp = ({setInstalledApps, downloadedApps, installedApp}) => {
    const {image, title, downloads, ratingAvg, size, id} = installedApp;

    const uninstallApp = id => {
        removeInstalledApp(id)

        toast(`${title} uninstalled from your device`)

        const filteredApps = downloadedApps.filter(downloadedApp => downloadedApp.id !== id);
        setInstalledApps(filteredApps)
    }

    return (
        <div className='flex flex-col md:flex-row bg-white rounded-sm p-4 justify-center md:justify-between items-center mx-auto'>
            <div className='flex flex-col md:flex-row gap-4 items-center'>
                <img className='rounded-lg max-w-full w-full h-full md:max-w-20 md:max-h-20 md:h-20 object-cover' src={image} alt="" />

                <div>
                    <h1 className='font-medium text-xl text-[#001931] mb-4 text-center md:text-left'>{title}</h1>

                    <div className='flex gap-7 md:gap-4'>
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

            <button onClick={() => uninstallApp(id)} className='font-semibold text-white py-3 px-4 rounded-sm bg-[#00D390] max-h-[43px] hover: cursor-pointer mt-4 md:mt-0'>Uninstall</button>
        </div>
    );
};

export default InstalledApp;