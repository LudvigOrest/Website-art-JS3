import React, { } from 'react';
import { useRecoilValue, useRecoilState } from 'recoil';
import { cartItemListState, totalPriceState, modalState, totalItemAmountState } from '../states/globalStates.js';
import { CartProductCard, Card } from '../components/Cart.js';

export function CheckoutView() {
    const cartItems = useRecoilValue(cartItemListState);
    const totalPrice = useRecoilValue(totalPriceState);

    return(
        <container id="main-container">
            <div class="dodge-header"></div>
            <form>
                <h1>Checkout</h1>
                <div class="cart-modal-item-card">
                        {
                            cartItems.map((item, i) => (
                                <CartProductCard index={i} />
                        ))}
                </div>
                <h3>Totalt: {totalPrice}</h3>
                <button type="submt">Lägg order</button>
            </form>
        </container>
    );
}