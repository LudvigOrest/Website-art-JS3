import './App.css';
import './styles/styles.css'
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import React, { Children, useEffect, useState } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import {HomeView} from './pages/Home';
import {PaintingsView} from './pages/Paintings';
import {PostersView} from './pages/Posters';
import Header from './components/Header';
import { createObjArr, getImgs, fetchImgs, fetchAll } from '../src/api/index';
import { url, auth } from '../src/api/index';
import { shopObjectArrState } from './states/globalStates';


function App() {
  
  const [state, setState] = useRecoilState(shopObjectArrState);

  useEffect( () =>{
    fetchAll(url, auth, setState);
  }, []);

  console.log(state);

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