import React, { Children } from 'react';

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
                </div>
                
            </div>
        </container>
    );
};

export default Header;