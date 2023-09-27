import React, { Children, useEffect, useState } from 'react';
import { fetchImgs, getImgs, pushImgs } from '../api/index.js';

function BannerItem({ bannerHeader, bannerPar, index, img }) {
    
    //Later on change this to global state for all images, maybe include .alt to fetch both img and name of painting
    const [imgArr, setImgArr] = useState([]);
    const url = "https://api.pexels.com/v1/search?query=modern art";
    const auth = { headers: {Authorization: "xxzPD6eb7sa0eA6uVDd0hhPcjU66MArp6vnVNZRrD1l37UnZ2bz2VNSQ"}};

    useEffect( () =>{
        let newArr = [];
        console.log(newArr);
        const asyncFn = async () => {
            newArr = await getImgs(url, auth);
        };
        newArr = asyncFn().then(() => {
            setImgArr(newArr[index].src.original)
        });
    }, []);

    return(
        <div id="banner">
            <div class="banner-item pop-animation">
                <img class="banner-img" src={ imgArr }></img>
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
            index="1" img={"imgArr"}
            />
            <BannerItem
            bannerHeader="FET RUBRIK" bannerPar="Lorem ipsum dolor amer set, ipsum falor mer sombre los." 
            index="2" img={"imgArr"}
            />
        </div>
    );
};

export default Banner;