import React, { Children, useEffect, useState } from 'react';
import { Cart } from './Cart.js';
import { getArtwork, imageList, fetchData, getImgs } from '../api/index.js';

function NavbarItem({ Body }) {
    return(
        <div class="navbar-items">{Body}</div>
    );
};

//Export Header-component below
function Header() {

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
                        <i id="shopping-cart" class="fi fi-rr-shopping-cart pop-animation"></i>
                    </div>
                    <div id="cart-modal">
                        <Cart />
                    </div>
                    
                </div>
            </div>
        </container>
    );
};

export default Header;