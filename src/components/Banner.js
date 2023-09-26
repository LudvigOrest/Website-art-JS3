import React, { Children, useEffect, useState } from 'react';
import { getArtwork, imageList } from '../api/index.js';

function BannerItem({ bannerHeader, bannerPar, index }) {

    const [img, setImg] = useState([]);
    useEffect(() =>{
        getArtwork(setImg, index);
    }, []);

    return(
        <div id="banner">
            <div class="banner-item pop-animation">
                <img class="banner-img" src={ img }></img>
                <h1 class="centered">{ bannerHeader }</h1>
                <p class="banner-p">{ bannerPar }</p>
            </div>
        </div>
    );
}

//Export Banner-component below
function Banner() {
    return(
        <div id="banner-container">
            <BannerItem 
            bannerHeader="FET RUBRIK" bannerPar="Lorem ipsum dolor amer set, ipsum falor mer sombre los." 
            index="1"
            />
            <BannerItem
            bannerHeader="FET RUBRIK" bannerPar="Lorem ipsum dolor amer set, ipsum falor mer sombre los." 
            index="2"
            />
        </div>
    );
};

export default Banner;