import React, { Children, useEffect, useState } from 'react';
import { getArtwork, imageList, fetchData, getImgs } from '../api/index.js';
import { useRecoilState, useRecoilValue } from 'recoil';
import { cartItemState, cartItemListState } from '../states/globalStates.js';

export function CartProductCard( {index} ) {

    const cartItemObject = useRecoilValue(cartItemState);
    const [itemArr, setItemArr] = useRecoilState(cartItemListState);

    console.log(itemArr);
    

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
                        <button>Add</button>
                        <button>Sub</button>
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



export function Cart({ name }) {

    function AllCartProductCards() { 
        console.log(itemsArr.length);

        for (let i = 0; i < itemsArr.length; i++) {
            itemsArr.map((items) => {
                console.log(itemsArr.indexOf(items));
                return <><CartProductCard index={itemsArr.indexOf(items)}/></>
            })
        }
    }

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
                    <AllCartProductCards />
                    {() => {
                            itemsArr.map((items) => {
                                console.log(itemsArr.indexOf(items));
                                return <><CartProductCard index={itemsArr.indexOf(items)}/></>
                            })
                        }
                    }
                    <CartProductCard index={itemsArr.length-1}/>
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