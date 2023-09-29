import { ShopItemsObject } from '../objects/objects.js';
const { atom } = require("recoil");

//Debug-object
let tester = new ShopItemsObject(343, "https://images.pexels.com/photos/1585325/pexels-photo-1585325.jpeg", "Debug", 1, "40x30", "300", true)

export const cartItemListState = atom({
    key: "cartItemListState",
    default: [tester]
});