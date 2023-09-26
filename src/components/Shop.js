import React, { Children, useEffect, useState } from 'react';
import { getArtwork, imageList } from '../api/index.js';

//Shop item-card
function ShopItem({ imgHeader, size, price, index }) {

    const [img, setImg] = useState([]);
    useEffect(() => {
        getArtwork(setImg, index);
    }, [])

    return(
        <div class="shop-item pop-animation">
            <img class="shop-thumbnail" src={ img }></img>
            <button class="shop-add-button">
                <i class="fi fi-rr-shopping-cart-add pointer pop-animation"
                style={{fontSize: "25px"}}></i>
            </button>
            <div class="shop-info">
                <h2>{ imgHeader }</h2>
                <h2>{ size }</h2>
                <h2 class="price">{ price }</h2>
            </div>
        </div>
    );
};

//Export Shop-component below
function Shop() {

    return(
        <container id="shop-container">
            <ShopItem imgHeader="Fin tavla" size="60x60 cm" price="6 000 kr" index="0"/>
            <ShopItem imgHeader="Fin tavla" size="60x60 cm" price="6 000 kr" index="2"/>
            <ShopItem imgHeader="Fin tavla" size="60x60 cm" price="6 000 kr" index="3"/>
            <ShopItem imgHeader="Fin tavla" size="60x60 cm" price="6 000 kr" index="4"/>
            <ShopItem imgHeader="Fin tavla" size="60x60 cm" price="6 000 kr" index="5"/>
            <ShopItem imgHeader="Fin tavla" size="60x60 cm" price="6 000 kr" index="6"/>
            <ShopItem imgHeader="Fin tavla" size="60x60 cm" price="6 000 kr" index="7"/>
        </container>
    );
    
};

export default Shop;