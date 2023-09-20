import React, { Children } from 'react';

//Export Footer-component below
function Footer() {
    return(
        <footer>
            <div id="footer-sub-1">
                <i class="fi fi-brands-instagram"></i>
                <i class="fi fi-brands-facebook"></i>
                <p>Kontakta</p>
            </div>
            <div id="footer-sub-2" style={{fontWeight: "bold"}}>
                © Lotten Orest
            </div>
            <div id="footer-sub-3">
                <p>Unicons by <a href="https://www.flaticon.com/uicons">Flaticon</a></p>
                <p>page creator: ludvig.orest@live.se</p>
            </div>
        </footer>
    );
};

export default Footer;