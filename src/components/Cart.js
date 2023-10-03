import React, { } from 'react';
import { useRecoilValue, useRecoilState } from 'recoil';
import { cartItemListState, totalPriceState, modalState, totalItemAmountState } from '../states/globalStates.js';

export function CartProductCard( {index} ) {
    const [itemArr, setItemArr] = useRecoilState(cartItemListState);
    const [modalVis, setModalVis] = useRecoilState(modalState);
    const [totalItemsAm, setTotalItemsAm] = useRecoilState(totalItemAmountState);

    //Onclick handler to add quantity in the Cart
    const add = () => {
        let newArr = itemArr.map((item, i) => {
            if (i === index) {
                return {...item, amount: (item.amount + 1)};
            }
            else { return {...item} };
        })
        setItemArr(newArr);
        setTotalItemsAm(totalItemsAm + 1);
    };

    //Onclick handler to remove quantity in the Cart
    const sub = () => {
        let newArr = itemArr.map((item, i) => {
            if (i === index && item.amount > 1) {
                return {...item, amount: (item.amount - 1)};
            }
            else { return {...item} };
        })
        //Check if the amount is = 1, if so, then remove the item
        if (itemArr[index].amount === 1) {
            removeFromCart(itemArr);
        } else {
            setItemArr(newArr);
        }
        setTotalItemsAm(totalItemsAm - 1);
    };

    //Onclick handler to remove an item
    const remove = () => {
        removeFromCart(itemArr);
    };

    //Onclick handler to clear the cart of items
    function removeFromCart(arr) {
        let updatedArr = [...arr];
        updatedArr.splice(index, 1);
        setItemArr(updatedArr);
        setTotalItemsAm(totalItemsAm - (itemArr[index].amount));
    };

    if (itemArr.length === 0) {
        return(
            <div>Varukorgen är tom</div>
        );
    }
    else {
        const AddButtons = () => {
            if( itemArr[index].isAddable === true ) {
                return(
                    <div class="buttons-container flex">
                        <button class="pointer greenify adder" onClick={add}>+</button>
                        <button class="pointer redify subber" onClick={sub}>-</button>
                    </div>
                );
            }
        };

        return(
            <div id="cart-modal-item-card" class="flex">
                <AddButtons />
                <div class="img-box">
                    <img src={ itemArr[index].img }></img>
                </div>
                <div class="details flex">
                    <h3>{ itemArr[index].name }</h3>
                    <div class="info flex">
                        <table>
                            <tr>
                                <th>Antal</th>
                                <th>Storlek</th>
                                <th>Pris</th>
                            </tr>
                            <tr>
                                <td>{ itemArr[index].amount }</td>
                                <td>{ itemArr[index].size }</td>
                                <td>{ itemArr[index].price * itemArr[index].amount }</td>
                            </tr>
                        </table>
                    </div>
                </div>
                <button class="remove" onClick={remove}>
                <i class="fi fi-rr-trash"></i>
                </button>
            </div>
        );
    };
};

export function Cart() {
    const [itemsArr, setItemsArr] = useRecoilState(cartItemListState);
    const [totalPrice, setTotalPrice] = useRecoilState(totalPriceState);
    const [modalVis, setModalVis] = useRecoilState(modalState);
    const [totalItemsAm, setTotalItemsAm] = useRecoilState(totalItemAmountState);

    //Set the total sum
    let totalSum = 0;
    itemsArr.forEach((obj) => {
        let objPrice = parseInt(obj.price)
        objPrice = objPrice * obj.amount;
        totalSum += objPrice;
    });
    totalSum = parseInt(totalSum);
    console.log(totalSum);
    setTotalPrice(totalSum);

    const clear = () => {
        setItemsArr([]);
        setTotalItemsAm(0);
    };

    const closeModal = () => {
        setModalVis("modal-closed")
    };

    return(
        <container id="modal-all">
            <container id="cart-modal-container" class="flex">
                <div id="cart-modal-header" class="flex">
                    <h1>Varukorg</h1>
                    <div id="cart-modal-header-btns" class="flex">
                        <button class="pointer" onClick={ closeModal }>Stäng</button>
                        <button class="pointer" onClick={ clear }>Rensa</button>
                    </div>
                </div>
                <container id="cart-modal-item-container flex">
                    <div class="cart-modal-item-card">
                        {
                            itemsArr.map((item, i) => (
                                <CartProductCard index={i}/>
                        ))}
                    </div>
                </container>
                <container id="cart-modal-footer flex">
                    <div id="cart-modal-amount">
                        <h3>Totalt: {totalPrice} kr</h3>
                    </div>
                    <div id="check-out">
                        <button>Gå till kassan</button>
                    </div>
                </container>
            </container>
        </container>
    );
};

export default Cart;