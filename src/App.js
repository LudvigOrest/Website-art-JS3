import './App.css';
import './styles/styles.css'
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { useRecoilState, useRecoilValue } from 'recoil';
import React, { Children, useEffect, useState } from 'react';
import {HomeView} from './pages/Home';
import {PaintingsView} from './pages/Paintings';
import {PostersView} from './pages/Posters';
import Header from './components/Header';
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
};



export default App;