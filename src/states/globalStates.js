import { ShopItemsObject } from '../objects/objects.js';
import {HomeView} from '../pages/Home';
const { atom } = require("recoil");

//Debug-object
let tester = new ShopItemsObject(343, "https://images.pexels.com/photos/1585325/pexels-photo-1585325.jpeg", "Debug", 1, "40x30", "300", false)
let tester2 = new  ShopItemsObject(343, "https://images.pexels.com/photos/1585325/pexels-photo-1585325.jpeg", "Debug", 1, "40x30", "300", true)

export const cartItemListState = atom({
    key: "cartItemListState",
    default: [tester, tester2]
});

export const totalPriceState = atom({
    key: "totalPriceState",
    default: 0,
});

export const modalState = atom({
    key: "modalState",
    default: "modal-closed"
});

export const pageState = atom({
    key: "pageState",
    default: <HomeView />,
});

export const imgArrState = atom({
    key: "imgArrState",
    default: []
});


export const totalItemAmountState = atom({
    key: "totalItemAmountState",
    default: 0
});