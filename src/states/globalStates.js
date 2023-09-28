import { CartItemsObject, ShopItemsObject } from '../objects/objects.js';
const { atom } = require("recoil");


export const cartItemState = atom({
    key: "cartItemState",
    default: new ShopItemsObject( 0, "src.url.com", "Shena", "testAmount", "testSize", "testPrice", true)
});

export const cartItemListState = atom({
    key: "cartItemListState",
    default: []
})