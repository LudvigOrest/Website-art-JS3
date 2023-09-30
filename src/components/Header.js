import React, { Children, useEffect, useState } from 'react';
import { useRecoilValue, useRecoilState } from 'recoil';
import { Cart } from './Cart.js';
import { getArtwork, imageList, fetchData, getImgs } from '../api/index.js';
import { modalState } from '../states/globalStates.js';

function NavbarItem({ Body }) {
    return(
        <div class="navbar-items">{Body}</div>
    );
};

function openCloseCart() {

}

//Export Header-component below
function Header() {

    const [visible, setVisible] = useRecoilState(modalState);
    const openCart = () => {
        setVisible("modal-open");
    }

    return (
        <container id="navbar">
            <div id="navbar-sub">
                <div class="navbar-sub-item" id="links">
                    <NavbarItem Body="Konst" />
                    <NavbarItem Body="Bilder" />
                    <NavbarItem Body="Beställningar" />
                    <NavbarItem Body="Kontakta" />
                </div>
                <div class="navbar-sub-item" id="header-item">
                    <h1 id="header">OREST ART</h1>  
                </div>
                <div class="navbar-sub-item">
                    <div class="navbar-items" id="search-bar">Sök</div>
                    <div id="cart-container">
                        <i id="shopping-cart" class="fi fi-rr-shopping-cart pop-animation" onClick={openCart}></i>
                    </div>
                    <div id="cart-modal" class={visible} >
                        <Cart />
                    </div>
                    
                </div>
            </div>
        </container>
    );
};

export default Header;