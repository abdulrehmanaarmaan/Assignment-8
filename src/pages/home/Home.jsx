import React from 'react';
import Banner from '../../components/banner/Banner';
import States from '../../components/states/States';
import TopPages from '../../components/top apps/TopApps';
import { useLoaderData} from 'react-router';

const Home = () => {
    const appData = useLoaderData();

    return (
        <div>
            <Banner></Banner>
            <States></States>
            <TopPages appData={appData}></TopPages>
        </div>
    );
};

export default Home;