import React, { Children, useEffect, useState } from 'react';
import { Cart } from './Cart.js';
import { getArtwork, imageList, fetchData, getImgs } from '../api/index.js';
import { ert, setErt } from '../states/states.js'

function NavbarItem({ Body }) {
    return(
        <div class="navbar-items">{Body}</div>
    );
};

//Export Header-component below
function Header() {

    //OBS! Eftersom <Cart /> inte finns i Shop.js så kan inte props skickas ner. Gå upp ett "lager" eller hitta annan lösning
    const [tryMe, setTryMe] = useState("load");

    return (
        <container id="navbar">
            <div id="navbar-sub">
                <div class="navbar-sub-item" id="links">
                    <NavbarItem Body="Konst" />
                    <NavbarItem Body="Bilder" />
                    <NavbarItem Body="Beställningar" />
                    <NavbarItem Body="Kontakta" />
                    <button onClick={() => {setTryMe("MEEE")}}>try</button>
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
                        <Cart name={tryMe}/>
                    </div>
                    
                </div>
            </div>
        </container>
    );
};

export default Header;