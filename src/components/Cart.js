import React, { Children, useEffect, useState } from 'react';
import { getArtwork, imageList, fetchData, getImgs } from '../api/index.js';

export function CartProductCard({ name, size, price }) {

    // https://react.dev/learn/sharing-state-between-components
    return (
        <div id="cart-modal-item-card" class="flex">
            <div id="buttons" class="flex">
                <button>Add</button>
                <button>Sub</button>
            </div>
            <img src="https://images.pexels.com/photos/1283208/pexels-photo-1283208.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280"></img>
            <div id="details">
                <h3>{name}</h3>
                <div id="info">
                    <table>
                        <tr>
                            <th>antal: </th>
                            <th>storlek: </th>
                            <th>pris: </th>
                        </tr>
                        <tr>
                            <td>1 st</td>
                            <td>{size}</td>
                            <td>{price}</td>
                        </tr>
                    </table>
                </div>
            </div>
            <h3>6 000 kr</h3>
            <button>Ta bort</button>
        </div>
    );
}

export function Cart({ name }) {

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
                    <CartProductCard name={name}/>
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