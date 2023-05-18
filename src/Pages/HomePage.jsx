import React from 'react';
import Banner from '../Components/Banner';
import ToyTabs from '../Components/ToyTabs';
import GallerySection from '../Components/GallerySection';
import GallerySec from '../Components/GallerySec';
import OnlineDelivery from '../Components/OnlineDelivery';

const HomePage = () => {
    return (
        <div>
            <Banner></Banner>
            <GallerySection></GallerySection>
            <ToyTabs></ToyTabs>
            <OnlineDelivery></OnlineDelivery>
            
        </div>
    );
};

export default HomePage;