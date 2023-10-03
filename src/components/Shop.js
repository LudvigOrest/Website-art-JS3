import React, { Children, useEffect, useState } from 'react';
import { getArtwork, imageList, fetchData, getImgs } from '../api/index.js';
import { useRecoilState, useRecoilValue } from 'recoil';
import { cartItemListState, imgArrState, totalItemAmountState } from '../states/globalStates.js';
import { ShopItemsObject } from '../objects/objects.js';


//Shop item-card
function ShopItem({ price, index, isPoster }) {
    const [cartItems, setCartItems] = useRecoilState(cartItemListState);
    const [imgArr, setImgArr] = useRecoilState(imgArrState);
    const [totalItemAm, setTotalItemAm] = useRecoilState(totalItemAmountState);

    const [artTitle, setArtTitle] = useState([]);
    const [artSize, setArtSize] = useState([]);
    const url = "https://api.pexels.com/v1/search?query=modern art";
    const auth = { headers: {Authorization: "xxzPD6eb7sa0eA6uVDd0hhPcjU66MArp6vnVNZRrD1l37UnZ2bz2VNSQ"}};

    //Onclick handler
    const clicked = () => {
        //params: (id, img, name, amount, size, price, isAddable) This global state is used in Cart.js
        let currentItem = new ShopItemsObject(index, imgArr[index], artTitle, 1, artSize, price, isPoster);
        if (isPoster != false) {
            console.log(currentItem);
            let isDupe = false;
            //Check if there are duplicates in the cart items-array
            let newArr = cartItems.map(item => {
                if (item.id == currentItem.id) {
                    isDupe = true;
                    return {...item, amount: (item.amount + 1)};
                }
                return item;
            });
            //If there is a dupe then just replace the old cart items-array with new array that has updated amount
            if (isDupe === true) {
                console.log(newArr);
                setCartItems(newArr);
                setTotalItemAm(totalItemAm + 1);
                isDupe = false
            } else { 
                setCartItems(cartItems => [...cartItems, currentItem]);
                setTotalItemAm(totalItemAm + 1);
            };
        } else if (isPoster === false) {
            console.log(currentItem);
            let isDupe = false;
            //Check if there are duplicates in the cart items-array
            let newArr = cartItems.map(item => {
                if (item.id == currentItem.id) {
                    isDupe = true;
                    return {...item, amount: (item.amount + 0)};
                }
                return item;
            });
            //If there is a dupe then just replace the old cart items-array with new array that has updated amount
            if (isDupe === true) {
                console.log(newArr);
                setCartItems(newArr);
                
                isDupe = false
            } else { 
                setCartItems(cartItems => [...cartItems, currentItem]);
                setTotalItemAm(totalItemAm + 1); 
            };
        }
    };
        
    useEffect( () =>{
        let newArr = [];
        const asyncFn = async () => {
            newArr = await getImgs(url, auth);
        };
        newArr = asyncFn().then(() => {
            let imgUrlArr = [];
            for (let i = 0; i < newArr.length; i++) {
                imgUrlArr.push(newArr[i].src.original)
            }
            setImgArr(imgUrlArr);
            setArtTitle(newArr[index].alt);
            let size = (
                ([newArr[index].height]).toString().slice(0, -2) + "x" + ([newArr[index].width]).toString().slice(0, -2)
            );
            setArtSize(size);
        });}, []);

    return(
        <div class="shop-item pop-animation">
            <img class="shop-thumbnail" src={ imgArr[index] }></img>
            <button class="shop-add-button" onClick={ clicked }>
                <i class="fi fi-rr-shopping-cart-add pointer pop-animation"
                style={{fontSize: "25px"}}></i>
            </button>
            <div class="shop-info">
                <h2>{ artTitle }</h2>
                <h2>{ artSize } cm</h2>
                <h2 class="price">{ price } kr</h2>
            </div>
        </div>
    );
};

//Export Shop-component below
function Shop({ filter }) {

    if (filter === "paintings") {
        return(
            <container id="shop-container">
                <ShopItem size="60x60 cm" price="6000" index="8" isPoster={false} />
                <ShopItem size="60x60 cm" price="6000" index="3" isPoster={false} />
                <ShopItem size="60x60 cm" price="6000" index="6" isPoster={false} />
                <ShopItem size="60x60 cm" price="6000" index="10" isPoster={false} />
                <ShopItem size="60x60 cm" price="6000" index="13" isPoster={false} />
                <ShopItem size="60x60 cm" price="6000" index="14" isPoster={false} />
            </container>
            
        );
    } else if (filter === "posters") {
        return (
            <container id="shop-container">
                <ShopItem size="60x60 cm" price="1500" index="7" isPoster={true} />
                <ShopItem size="60x60 cm" price="1500" index="9" isPoster={true} />
                <ShopItem size="60x60 cm" price="1500" index="4" isPoster={true} />
                <ShopItem size="60x60 cm" price="1500" index="5" isPoster={true} />
                <ShopItem size="60x60 cm" price="1500" index="12" isPoster={true} />
                <ShopItem size="60x60 cm" price="1500" index="11" isPoster={true} />
            </container>
        );
    } else {
        return(
            <container id="shop-container">
                <ShopItem size="60x60 cm" price="1500" index="7" isPoster={true} />
                <ShopItem size="60x60 cm" price="6000" index="8" isPoster={false} />
                <ShopItem size="60x60 cm" price="1500" index="9" isPoster={true} />
                <ShopItem size="60x60 cm" price="6000" index="3" isPoster={false} />
                <ShopItem size="60x60 cm" price="1500" index="4" isPoster={true} />
                <ShopItem size="60x60 cm" price="1500" index="5" isPoster={true} />
                <ShopItem size="60x60 cm" price="6000" index="6" isPoster={false} />
                <ShopItem size="60x60 cm" price="1500" index="12" isPoster={true} />
                <ShopItem size="60x60 cm" price="6000" index="10" isPoster={false} />
                <ShopItem size="60x60 cm" price="1500" index="11" isPoster={true} />
                <ShopItem size="60x60 cm" price="6000" index="13" isPoster={false} />
                <ShopItem size="60x60 cm" price="6000" index="14" isPoster={false} />
            </container>
            );
        };
    };

export default Shop;