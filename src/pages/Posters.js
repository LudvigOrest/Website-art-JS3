import React from "react";
import Shop from '../components/Shop';
import Footer from '../components/Footer';
import Banner from '../components/Banner';
import Filtered from '../components/Filtered';

export function PostersView() {
    return(
    <container id="main-container">
        <Filtered pBody="Posters i olika storlekar. Det är möjligt att beställa flera exemplar av samma poster." />
        <Shop />
        <Footer />
    </container>
    );
}