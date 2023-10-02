import React, { Children, useEffect, useState } from 'react';
import { fetchImgs, getImgs, pushImgs } from '../api/index.js';
import { useRecoilValue } from 'recoil';
import { imgArrState } from '../states/globalStates.js';

function BannerItem({ bannerHeader, bannerPar, index }) {
    
    //Later on change this to global state for all images, maybe include .alt to fetch both img and name of painting
    const imgArr = useRecoilValue(imgArrState);
    const url = "https://api.pexels.com/v1/search?query=modern art";
    const auth = { headers: {Authorization: "xxzPD6eb7sa0eA6uVDd0hhPcjU66MArp6vnVNZRrD1l37UnZ2bz2VNSQ"}};

    return(
        <div id="banner">
            <div class="banner-item focus-animation">
                <img class="banner-img"  src={ imgArr[index] }></img>
                <h1 class="centered">{ bannerHeader }</h1>
                <p class="banner-p">{ bannerPar }</p>
            </div>
        </div>
    );
}

//Export Banner-component below
function Banner({ amount, bannerHeader, bannerPar }) {
    let items = [];
    for (let i = 0; i < amount; i++) {
        items.push(<BannerItem bannerHeader={ bannerHeader[i] } bannerPar={ bannerPar[i] } index={i} img={"imgArr"} />);
    }
 return(
        <div id="banner-container">
            {items}
        </div>
    );
};

export default Banner;