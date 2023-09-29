import React, { Children, useEffect, useState } from 'react';
import { getArtwork, imageList, fetchData, getImgs } from '../api/index.js';
import { useRecoilValue, useRecoilState } from 'recoil';
import { cartItemListState } from '../states/globalStates.js';

export function CartProductCard( {index} ) {

    const [itemArr, setItemArr] = useRecoilState(cartItemListState);

    //Onclick functions for add/remove quantity in the Cart
    const add = () => {
        let newArr = itemArr.map((item, i) => {
            if (i === index) {
                return {...item, amount: (item.amount + 1)};
            }
            else { return {...item} };
        })
        setItemArr(newArr);
    };
    const sub = () => {
        let newArr = itemArr.map((item, i) => {
            if (i === index && item.amount > 0) {
                return {...item, amount: (item.amount - 1)};
            }
            else { return {...item} };
        })
        setItemArr(newArr);
    };

    //Fix this >
    if (itemArr.length === 0) {
        return(
            <div>Varukorgen är tom</div>
        );
    }
    else {
        const AddButtons = () => {
            if( itemArr[index].isAddable === true ) {
                return(
                    <div class="buttons-container flex">
                        <button class="pointer greenify adder" onClick={add}>+</button>
                        <button class="pointer redify subber" onClick={sub}>-</button>
                    </div>
                );
            } else {return <>Sorry</>}
        }

        
        return(
            <div id="cart-modal-item-card" class="flex">
                <AddButtons />
                <div class="img-box">
                    <img src={ itemArr[index].img }></img>
                </div>
                <div class="details flex">
                    <h3>{ itemArr[index].name }</h3>
                    <div class="info flex">
                        <table>
                            <tr>
                                <th>Antal</th>
                                <th>Storlek</th>
                                <th>Pris</th>
                            </tr>
                            <tr>
                                <td>{ itemArr[index].amount }</td>
                                <td>{ itemArr[index].size }</td>
                                <td>{ itemArr[index].price * itemArr[index].amount }</td>
                            </tr>
                        </table>
                    </div>
                </div>
                <button class="remove redify">
                <i class="fi fi-rr-trash"></i>
                </button>
            </div>
        );
    }
}

export function Cart() {

    const [itemsArr, setItemsArr] = useRecoilState(cartItemListState);
    
    

    return(
        <container id="cart-modal-container" class="flex">
            <div id="cart-modal-header" class="flex">
                <h1>Varukorg</h1>
                <div id="cart-modal-header-btns" class="flex">
                    <button>Stäng</button>
                    <button class="redify">Rensa</button>
                </div>
            </div>
            <container id="cart-modal-item-container flex">
                <div class="cart-modal-item-card">
                    {
                        itemsArr.map((item, i) => (
                            <CartProductCard index={i}/>
                    ))}
                </div>
            </container>
            <container id="cart-modal-footer flex">
                <div id="cart-modal-amount">
                    <h3>Totalt: 4000 kr</h3>
                </div>
                <div id="check-out">
                    <button>Gå till kassan</button>
                </div>
            </container>
        </container>
    );
}

export default Cart;