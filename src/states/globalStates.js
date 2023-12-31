const { atom } = require("recoil");

export const cartItemListState = atom({
    key: "cartItemListState",
    default: []
});

export const totalPriceState = atom({
    key: "totalPriceState",
    default: 0,
});

export const modalState = atom({
    key: "modalState",
    default: "modal-closed"
});

//Array with image urls
export const imgArrState = atom({
    key: "imgArrState",
    default: []
});


export const totalItemAmountState = atom({
    key: "totalItemAmountState",
    default: 0
});

//Use this one for all shop-items instead, this way only need one arr that fetches in App.js
export const shopObjectArrState = atom({
    key: "shopObjectArrState",
    default: []
});

export const currentLinkState = atom({
    key: "currentLinkState",
    default: ""
});