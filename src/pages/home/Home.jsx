import React from 'react';
import Banner from '../../components/banner/Banner';
import States from '../../components/states/States';
import TopPages from '../../components/top pages/TopPages';
import { useLoaderData, useOutletContext } from 'react-router';

const Home = () => {
    const appData = useLoaderData();

    const {setLink} = useOutletContext();

    return (
        <div>
            <Banner></Banner>
            <States></States>
            <TopPages setLink={setLink} appData={appData}></TopPages>
        </div>
    );
};

export default Home;