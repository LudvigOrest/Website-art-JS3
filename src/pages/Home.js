import React from "react";
import Banner from '../components/Banner';
import Shop from '../components/Shop';
import Footer from '../components/Footer';

export function HomeView() {
    return(
        <container id="main-container">
            <Banner amount={2} bannerHeader={[["Tavlor i olika storlekar"], ["Prisvärda posters"]]} 
            bannerPar={[["klicka här för att visa tavlor"], ["klicka här för att visa posters"]]} 
            wh={[["inherit"], ["inherit"]]}/>
            <Shop />
            <Footer />
        </container>
    );
}