import React, { useEffect, useState } from 'react';
import Navbar from '../navbar/Navbar';
import { Outlet, useNavigation } from 'react-router';
import Footer from '../footer/Footer';
import { ToastContainer } from 'react-toastify';
import { TailSpin } from "react-loader-spinner";

const Root = () => {
    const [link, setLink] = useState('');
    const navigation = useNavigation();
    const [showSpinner, setShowSpinner] = useState(false);

    const isLoading = navigation.state === 'loading';

    const [pageLoading, setPageLoading] = useState(false);

  // Show spinner immediately on route change OR page data loading
  useEffect(() => {
    if (isLoading || pageLoading) {
      setShowSpinner(true);
    } else {
      // Keep spinner visible 1.5s after loading finishes
      const timer = setTimeout(() => setShowSpinner(false), 1500);
      return () => clearTimeout(timer);
    }
  }, [isLoading, pageLoading]);


    return (
        <div>
            <Navbar link={link} setLink={setLink}></Navbar>

            <div className='bg-gray-100 py-20 min-h-screen'>
                {showSpinner ? <div className={`absolute inset-0 flex justify-center items-center z-50 transition-opacity duration-150 opacity-100`}>
      <TailSpin
        visible={true}
        height="80"
        width="80"
        color="#4fa94d"
        ariaLabel="tail-spin-loading"
        radius="1"
      />
    </div>:
                <Outlet context={{setLink, setPageLoading}}></Outlet>}
            
            </div>
            

            <Footer></Footer>
            <ToastContainer />
        </div>
    );
};

export default Root;