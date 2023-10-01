import React, { Children, useEffect, useState } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import { cartItemListState, imgArrState } from '../states/globalStates.js';
import { ShopItemsObject } from '../objects/objects.js';

export let artArr;

export let imageList = [];
export let imageList2 = [];

//Pexel-api
const url = "https://api.pexels.com/v1/search?query=modernart";
const auth = { headers: {Authorization: "xxzPD6eb7sa0eA6uVDd0hhPcjU66MArp6vnVNZRrD1l37UnZ2bz2VNSQ"}};

export const fetchImgs = async(url, auth) => {
  let fetchData = await fetch(url, auth);
  let fetchJson = await fetchData.json();
  return fetchJson;
};

export function getImgs(url, auth) {
  return fetchImgs(url, auth).then((jsonData) => {
      return jsonData.photos;
  })
};



