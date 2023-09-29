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
        console.log(itemArr);
        const AddButtons = () => {
            if( itemArr[index].isAddable === true ) {
                return(
                    <div id="buttons" class="flex">
                        <button onClick={add}>Add</button>
                        <button onClick={sub}>Sub</button>
                    </div>
                );
            } else {return <>Sorry</>}
        }
        return(
            <div id="cart-modal-item-card" class="flex">
                <AddButtons />
                <img src={ itemArr[index].img }></img>
                <div id="details">
                    <h3>{ itemArr[index].name }</h3>
                    <div id="info">
                        <table>
                            <tr>
                                <th>antal: </th>
                                <th>storlek: </th>
                                <th>pris: </th>
                            </tr>
                            <tr>
                                <td>{ itemArr[index].amount }</td>
                                <td>{ itemArr[index].size }</td>
                                <td>{ itemArr[index].price }</td>
                            </tr>
                        </table>
                    </div>
                </div>
                <h3>6 000 kr</h3>
                <button>Ta bort</button>
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
                    <h3>Minimera</h3>
                    <h3>Rensa</h3>
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