import './App.css';
import './styles/styles.css'
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { useRecoilState, useRecoilValue } from 'recoil';
import React, { Children, useEffect, useState } from 'react';
import {HomeView} from './pages/Home';
import {PaintingsView} from './pages/Paintings';
import {PostersView} from './pages/Posters';
import logo from '../src/api/images/furn/logo.png';
import { getImgs } from '../src/api/index';
import { Cart } from './components/Cart';
import { modalState, totalItemAmountState } from './states/globalStates';


function App() {

  return (
    
    <BrowserRouter>
      <Header />
      <Routes>
        <Route index element={<HomeView />} />
        <Route path="paintings" element={ <PaintingsView />} />
        <Route path="posters" element={ <PostersView />} />
      </Routes>
    </BrowserRouter>
  );
}

//Export Header-component below
function Header() {

  const [visible, setVisible] = useRecoilState(modalState);
  const totalItems = useRecoilValue(totalItemAmountState);

  const [homeClass, setHomeClass] = useState("navbar-links navbar-items");
  const [paintingClass, setPaintingClass] = useState("navbar-links navbar-items");
  const [posterClass, setPosterClass] = useState("navbar-links navbar-items");
  const [contactClass, setContactClass] = useState("navbar-links navbar-items");
  

  const openCart = () => {
      setVisible("modal-open");
  }

  function selected(func) {
    switch(func) {
      case setHomeClass:
        setHomeClass("navbar-selected navbar-links navbar-items ")
        setPaintingClass("navbar-links navbar-items")
        setPosterClass("navbar-links navbar-items")
        setContactClass("navbar-links navbar-items")
        break;
      case setPaintingClass:
        setHomeClass("navbar-links navbar-items")
        setPaintingClass("navbar-selected navbar-links navbar-items ")
        setPosterClass("navbar-links navbar-items")
        setContactClass("navbar-links navbar-items")
        break;
      case setPosterClass:
        setHomeClass("navbar-links navbar-items")
        setPaintingClass("navbar-links navbar-items")
        setPosterClass("navbar-selected navbar-links navbar-items ")
        setContactClass("navbar-links navbar-items")
        break;
      case setContactClass:
        setHomeClass("navbar-links navbar-items")
        setPaintingClass("navbar-links navbar-items")
        setPosterClass("navbar-links navbar-items")
        setContactClass("navbar-selected navbar-links navbar-items ")
        break;
    }
  }

  return (
      <container id="navbar">
          <div id="navbar-sub">
              <div id="header-item">
                  <a href="" id="header">orest</a>  
                  <img class="pointer" src={logo} alt="logo.png"></img>
                  <a id="header">konst</a>  
              </div>
              <div id="links">
                <Link to="/" class={homeClass} onClick={() => {selected(setHomeClass)}}>Hem</Link>
                <Link to="/paintings" class={paintingClass} onClick={() => {selected(setPaintingClass)}} >Målningar</Link>
                <Link to="/posters" class={posterClass} onClick={() => {selected(setPosterClass)}} >Posters</Link>
                <Link to="/contact" class={contactClass} onClick={() => {selected(setContactClass)}} >Kontakt</Link>
              </div>
              <div id="navbar-sub-item">
                  <div class="navbar-items" id="search-bar" style={{cursor: "default"}}>
                  </div>
                  <div class="pointer" id="cart-container">
                    <p>{totalItems}</p>
                    <i id="shopping-cart" class="fi fi-rr-shopping-cart pop-animation" onClick={ openCart }></i>
                  </div>
                  <div id="cart-modal" class={ visible } >
                      <Cart />
                  </div>
              </div>
          </div>
      </container>
  );
};

export default App;
