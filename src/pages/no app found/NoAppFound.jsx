import React from 'react';
import appNotFoundImage from '../../assets/App-Error.png'

const NoAppFound = ({setSearch}) => {
    return (
        <div className='text-center mt-[94.2px]'>
            <img className='mx-auto' src={appNotFoundImage} alt="" />

            <h1 className='font-semibold text-5xl text-[#001931] mt-[44.26px] mb-2'>OOPS!! APP NOT FOUND</h1>

            <p className='font-normal text-xl text-[#627382] mb-4'>The App you are requesting is not found on our system.  please try another apps</p>

            <button onClick={() => setSearch('')} className='font-semibold py-[14.5px] px-[40.5px] rounded-sm bg-gradient-to-r from-[#632EE3] to-[#9F62F2] hover:cursor-pointer text-white'>Go Back!!</button>
        </div>
    );
};

export default NoAppFound;