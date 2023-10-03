import './App.css';
import './styles/styles.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { HomeView } from './pages/Home';
import { PaintingsView } from './pages/Paintings';
import { PostersView } from './pages/Posters';
import { CheckoutView } from './pages/Checkout';
import Header from './components/Header';
import { fetchAll } from '../src/api/index';
import { url, auth } from '../src/api/index';
import { shopObjectArrState, imgArrState } from './states/globalStates';


function App() {

  const [shopObj, setShopObj] = useRecoilState(shopObjectArrState);
  const [imgSrcArr, setImgSrcArr] = useRecoilState(imgArrState);

  //Fetch obj and set shop-items and the image-sources
  useEffect(() => {
    fetchAll(url, auth, setShopObj, setImgSrcArr);
  }, []);

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route index element={<HomeView />} />
        <Route path="paintings" element={<PaintingsView />} />
        <Route path="posters" element={<PostersView />} />
        <Route path="checkout" element={<CheckoutView />} />
      </Routes>
    </BrowserRouter>
  );
};



export default App;