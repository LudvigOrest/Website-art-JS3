import React, { Children, useEffect, useState } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import { cartItemListState, imgArrState } from '../states/globalStates.js';
import { ShopItemsObject } from '../objects/objects.js';

let objArr = [];
let imgSrcArr = [];

//Pexel-api
export const url = "https://api.pexels.com/v1/search?query=modern art";
export const auth = { headers: { Authorization: "xxzPD6eb7sa0eA6uVDd0hhPcjU66MArp6vnVNZRrD1l37UnZ2bz2VNSQ" } };

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

function rng(min, max, multi) {
  let res = Math.round((Math.round((Math.random(max) * multi) + min)) / 1000) * 1000;
  return res;
};

//Fetch everything and put in global objArr and ImgSrcArr
export function fetchAll(url, auth, setState, setImgSrcState) {
  fetch(url, auth)
    .then(resp => {
      return resp.json()
    })
    .then((images) => {
      objArr = [];
      imgSrcArr = [];
      for (let i = 0; i < images.photos.length; i++) {
        objArr.push(images.photos[i]);
        //Randomize the price and wether item is a poster or not
        objArr[i].price = rng(1, 1000, 10000);
        if (i % 2 === 0) {
          objArr[i].isPoster = true;
        } else {
          objArr[i].isPoster = false;
        };
        imgSrcArr.push(images.photos[i].src.original)
      }
      setState(objArr);
      setImgSrcState(imgSrcArr);
      console.log(imgSrcArr);
    });
}



