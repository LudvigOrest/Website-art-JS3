import React, { Children } from 'react';

function BannerItem({ imgSource, bannerHeader, bannerPar }) {
    return(
        <div id="banner">
            <div class="banner-item pop-animation">
                <img class="banner-img" src={ imgSource }></img>
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
            <BannerItem imgSource="./api/placeholder-3.jpg" 
            bannerHeader="FET RUBRIK" bannerPar="Lorem ipsum dolor amer set, ipsum falor mer sombre los." 
            />
            <BannerItem imgSource="placeholderText.jpg" 
            bannerHeader="FET RUBRIK" bannerPar="Lorem ipsum dolor amer set, ipsum falor mer sombre los." 
            />
        </div>
    );
};

export default Banner;