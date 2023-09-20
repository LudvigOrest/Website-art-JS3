import React, { Children } from 'react';

function ShopItem({ imgSrc, imgHeader, size, price }) {
    return(
        <div class="shop-item pop-animation">
            <img class="shop-thumbnail" src={ imgSrc }></img>
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
            <ShopItem imgSrc="placeholder.jpg" imgHeader="Fin tavla" size="60x60 cm" price="6 000 kr"/>
            <ShopItem imgSrc="placeholder.jpg" imgHeader="Fin tavla" size="60x60 cm" price="6 000 kr"/>
            <ShopItem imgSrc="placeholder.jpg" imgHeader="Fin tavla" size="60x60 cm" price="6 000 kr"/>
            <ShopItem imgSrc="placeholder.jpg" imgHeader="Fin tavla" size="60x60 cm" price="6 000 kr"/>
            <ShopItem imgSrc="placeholder.jpg" imgHeader="Fin tavla" size="60x60 cm" price="6 000 kr"/>
            <ShopItem imgSrc="placeholder.jpg" imgHeader="Fin tavla" size="60x60 cm" price="6 000 kr"/>
            <ShopItem imgSrc="placeholder.jpg" imgHeader="Fin tavla" size="60x60 cm" price="6 000 kr"/>
        </container>
    );
};

export default Shop;