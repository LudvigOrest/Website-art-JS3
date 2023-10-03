import { useRecoilValue } from 'recoil';
import { imgArrState } from '../states/globalStates.js';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

function BannerItem({ bannerHeader, bannerPar, index }) {
    const imgArr = useRecoilValue(imgArrState);

    return(
        <div id="banner">
            <div class="banner-item focus-animation pointer">
                <img class="banner-img"  src={ imgArr[index] }></img>
                <h1 class="centered">{ bannerHeader }</h1>
                <p class="banner-p">{ bannerPar }</p>
            </div>
        </div>
    );
};

//Export Banner-component below
function Banner({ amount, bannerHeader, bannerPar, routes }) {
    let items = [];
    for (let i = 0; i < amount; i++) {
        items.push(<Link to={routes[i].toString()} class="banner-link"><BannerItem bannerHeader={ bannerHeader[i] } bannerPar={ bannerPar[i] } index={i} img={"imgArr"} /></Link>);
    }
 return(
        <div id="banner-container">
            {items}
        </div>
    );
};

export default Banner;