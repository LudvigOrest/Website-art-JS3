import { CartItemsObject, ShopItemsObject } from '../objects/objects.js';
const { atom } = require("recoil");

export const cartItemListState = atom({
    key: "cartItemListState",
    default: []
});


export async function lookForDupes(array) {

    console.log("looking through array");
    let isDupe = false;
    array.map((el, i) => {
        return array.find((element, index) => {
            if (i !== index && element.id === el.id) {
                console.log(index);
                isDupe = true;
            }
        })
    })
    console.log("dupe? " + isDupe);
    return isDupe;
};