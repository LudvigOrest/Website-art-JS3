import { useRecoilState, useRecoilValue } from 'recoil';
import { cartItemListState, imgArrState, totalItemAmountState, shopObjectArrState } from '../states/globalStates.js';
import { ShopItemsObject } from '../objects/objects.js';

//Shop item-card
function ShopItem({ price, index, isPoster, size }) {
    const [cartItems, setCartItems] = useRecoilState(cartItemListState);
    const [totalItemAm, setTotalItemAm] = useRecoilState(totalItemAmountState);
    const shopObjArr = useRecoilValue(shopObjectArrState);
    const imgArr = useRecoilValue(imgArrState);

    //Onclick handler
    const clicked = () => {
        //params: (id, img, name, amount, size, price, isAddable) This global state is used in Cart.js
        let currentItem = new ShopItemsObject(index, imgArr[index], shopObjArr[index].alt, 1, size, price, shopObjArr[index].isPoster);

        if (shopObjArr[index].isPoster != false) {
            console.log(currentItem);
            let isDupe = false;
            //Check if there are duplicates in the cart items-array
            let newArr = cartItems.map(item => {
                if (item.id == currentItem.id) {
                    isDupe = true;
                    return { ...item, amount: (item.amount + 1) };
                }
                return item;
            });
            //If there is a dupe then just replace the old cart items-array with new array that has updated amount
            if (isDupe === true) {
                console.log(newArr);
                setCartItems(newArr);
                setTotalItemAm(totalItemAm + 1);
                isDupe = false
            } else {
                setCartItems(cartItems => [...cartItems, currentItem]);
                setTotalItemAm(totalItemAm + 1);
            };
        } else if (isPoster === false) {
            console.log(currentItem);
            let isDupe = false;
            //Check if there are duplicates in the cart items-array
            let newArr = cartItems.map(item => {
                if (item.id == currentItem.id) {
                    isDupe = true;
                    return { ...item, amount: (item.amount + 0) };
                }
                return item;
            });
            //If there is a dupe then just replace the old cart items-array with new array that has updated amount
            if (isDupe === true) {
                console.log(newArr);
                setCartItems(newArr);

                isDupe = false
            } else {
                setCartItems(cartItems => [...cartItems, currentItem]);
                setTotalItemAm(totalItemAm + 1);
            };
        }
    };

    if (shopObjArr.length === 0) {
        return <p>loading...</p>;
    }
    else {
        return (
            <div class="shop-item pop-animation">
                <img class="shop-thumbnail" src={imgArr[index]}></img>
                <button class="shop-add-button" onClick={clicked}>
                    <i class="fi fi-rr-shopping-cart-add pointer pop-animation"
                        style={{ fontSize: "25px" }}></i>
                </button>
                <div class="shop-info">
                    <h2>{shopObjArr[index].alt}</h2>
                    <h2>{size} cm</h2>
                    <h2 class="price">{price} kr</h2>
                </div>
            </div>
        );
    }
};

//Export Shop-component below
function Shop({ filter }) {
    const shopObjArr = useRecoilValue(shopObjectArrState);

    if (filter === "paintings") {
        return (
            <container id="shop-container">
                <>{shopObjArr.map((obj, i) => {
                    if (shopObjArr[i].isPoster === false) {
                        let size = ([shopObjArr[i].height]).toString().slice(0, -2) + "x" + ([shopObjArr[i].width]).toString().slice(0, -2);
                        return (<ShopItem price={shopObjArr[i].price} size={size} index={i} isPoster={shopObjArr[i].isPoster} />);
                    }
                })}</>
            </container>
        );
    }
    if (filter === "posters") {
        return (
            <container id="shop-container">
                <>{shopObjArr.map((obj, i) => {
                    if (shopObjArr[i].isPoster === true) {
                        let size = ([shopObjArr[i].height]).toString().slice(0, -2) + "x" + ([shopObjArr[i].width]).toString().slice(0, -2);
                        return (<ShopItem price={shopObjArr[i].price} size={size} index={i} isPoster={shopObjArr[i].isPoster} />);
                    }
                })}</>
            </container>
        );
    }
    else {
        return (
            <container id="shop-container">
                <>{shopObjArr.map((obj, i) => {
                    let size = ([shopObjArr[i].height]).toString().slice(0, -2) + "x" + ([shopObjArr[i].width]).toString().slice(0, -2);
                    return (<ShopItem price={shopObjArr[i].price} size={size} index={i} isPoster={shopObjArr[i].isPoster} />);
                })}</>
            </container>
        );
    };
};

export default Shop;