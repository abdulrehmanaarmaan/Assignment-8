import React from 'react';
import Navbar from '../navbar/Navbar';
import { Outlet } from 'react-router';
import Footer from '../footer/Footer';
import { ToastContainer } from 'react-toastify';

const Root = () => {
    return (
        <div>
            <Navbar></Navbar>

            <div className='bg-gray-100 py-20'>
                <Outlet></Outlet>
            </div>

            <Footer></Footer>
            <ToastContainer />
        </div>
    );
};

export default Root;