import React from 'react';
import errorLogo from '../../assets/error-404.png'
import Navbar from '../../components/navbar/Navbar';
import Footer from '../../components/footer/Footer';
import { Navigate, useNavigate } from 'react-router';

const ErrorPage = () => {
    const navigate = useNavigate();

    const handleNavigation = () => {
        navigate(-1, {replace: 1})
    }

    return (
        <div className='flex flex-col'>

            <Navbar></Navbar>

            <div className='bg-gray-100 py-20 text-center'>
                <img className='mx-auto mb-[65.62px]' src={errorLogo} alt="" />

                <h1 className='text-5xl font-semibold text-[#001931]'>Oops, page not found!</h1>

                <p className='text-xl font-normal text-[#627382] mt-2 mb-4'>The page you are looking for is not available.</p>

                <button onClick={handleNavigation} className='font-semibold text-white py-[14.5px] px-[40.5px] rounded-sm bg-gradient-to-r from-[#632EE3] to-[#9F62F2] hover: cursor-pointer'>Go Back!</button>
            </div>

            <Footer></Footer>
        </div>
    );
};

export default ErrorPage;