import React, { Children, useEffect, useState } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import { cartItemListState, imgArrState } from '../states/globalStates.js';
import { ShopItemsObject } from '../objects/objects.js';

export let artArr;

export let imageList = [];
export let imageList2 = [];



//Pexel-api
export const url = "https://api.pexels.com/v1/search?query=modernart&per_page=15";
export const auth = { headers: {Authorization: "xxzPD6eb7sa0eA6uVDd0hhPcjU66MArp6vnVNZRrD1l37UnZ2bz2VNSQ"}};

export async function fetchImgs(url, auth) {
  let fetchData = await fetch(url, auth);
  let fetchJson = await fetchData.json();
  return fetchJson;
};

export function getImgs(url, auth) {
  return fetchImgs(url, auth).then((jsonData) => {
      return jsonData.photos;
  })
};

export function fetchAll(url, auth, setState) {
  fetch(url, auth)
   .then(resp => {
    return resp.json()
  })
   .then((images) => {
    imageList = [];
    for (let i = 0; i < images.photos.length; i++) {
        imageList.push(images.photos[i]);  
   }
    console.log(imageList);
    setState(imageList);
   });
  }



