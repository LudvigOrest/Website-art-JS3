import React from "react";
import Shop from '../components/Shop';
import Footer from '../components/Footer';
import Filtered from '../components/Filtered';

export function PaintingsView() {
    return(
    <container id="main-container">
        <Filtered pBody="Eftersom tavlorna är målade på duk så kan de endast beställas en åt gången" />
        <Shop filter="paintings" />
        <Footer />
    </container>
    );
};