import React, { Children, useEffect, useState } from 'react';
import { getArtwork, imageList, fetchData, getImgs } from '../api/index.js';

//Shop item-card
function ShopItem({ size, price, index }) {

    //Later on change this to global state for all images, maybe include .alt to fetch both img and name of painting
    const [imgArr, setImgArr] = useState([]);
    const [artTitle, setArtTitle] = useState([]);
    const [artSize, setArtSize] = useState([]);
    const url = "https://api.pexels.com/v1/search?query=modern art";
    const auth = { headers: {Authorization: "xxzPD6eb7sa0eA6uVDd0hhPcjU66MArp6vnVNZRrD1l37UnZ2bz2VNSQ"}};

    useEffect( () =>{
        let newArr = [];
        console.log(newArr);
        const asyncFn = async () => {
            newArr = await getImgs(url, auth);
        };
        newArr = asyncFn().then(() => {
            //Set states for component
            setImgArr(newArr[index].src.original)
            setArtTitle(newArr[index].alt);
            let size = (
                ([newArr[index].height]).toString().slice(0, -2) + "x" + ([newArr[index].width]).toString().slice(0, -2)
            );
            setArtSize(size);
        });
    }, []);

    return(
        <div class="shop-item pop-animation">
            <img class="shop-thumbnail" src={ imgArr }></img>
            <button class="shop-add-button">
                <i class="fi fi-rr-shopping-cart-add pointer pop-animation"
                style={{fontSize: "25px"}}></i>
            </button>
            <div class="shop-info">
                <h2>{ artTitle }</h2>
                <h2>{ artSize } </h2>
                <h2 class="price">{ price }</h2>
            </div>
        </div>
    );
};

//Export Shop-component below
function Shop() {

    return(
        <container id="shop-container">
            <ShopItem size="60x60 cm" price="6 000 kr" index="7"/>
            <ShopItem size="60x60 cm" price="6 000 kr" index="8"/>
            <ShopItem size="60x60 cm" price="6 000 kr" index="9"/>
            <ShopItem size="60x60 cm" price="6 000 kr" index="3"/>
            <ShopItem size="60x60 cm" price="6 000 kr" index="4"/>
            <ShopItem size="60x60 cm" price="6 000 kr" index="5"/>
            <ShopItem size="60x60 cm" price="6 000 kr" index="6"/>
            <ShopItem size="60x60 cm" price="6 000 kr" index="12"/>
        </container>
        );
    };

export default Shop;