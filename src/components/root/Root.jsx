import Navbar from '../navbar/Navbar';
import { Outlet, useNavigation } from 'react-router';
import Footer from '../footer/Footer';
import { ToastContainer } from 'react-toastify';
import { TailSpin } from "react-loader-spinner";
import { useEffect, useState } from 'react';
import './Root.css'

const Root = () => {
    const navigation = useNavigation();

    const isLoading = navigation.state === 'loading';

    const [showSpinner, setShowSpinner] = useState(false);



    useEffect(() => {
        if (isLoading) {
            setShowSpinner(true)
        }

        else {
            const timeout = setTimeout(() => setShowSpinner(false), 2000);
            return () => clearTimeout(timeout)
            }

        }, [isLoading]);

    return (
        <div>
            <Navbar></Navbar>

            <div className='bg-gray-100 py-20 min-h-screen relative'>
                {showSpinner ? (<div className='instant-spin absolute inset-0 flex justify-center items-center z-50 delay-[0ms] opacity-100'>
                    <TailSpin
                    visible={true}
                    height="80"
                    width="80"
                    color="#4fa94d"
                    ariaLabel="tail-spin-loading"
                    radius="1"
                    wrapperStyle={{}}
                    wrapperClass=""
                    />
                </div>) : (<Outlet></Outlet>)}
            </div>
            
            <Footer></Footer>
            <ToastContainer />
        </div>
    );
};

export default Root;