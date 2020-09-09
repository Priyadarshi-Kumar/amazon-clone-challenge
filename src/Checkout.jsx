import React from "react";
import "./Checkout.css";
import Subtotal from "./Subtotal";


function Checkout() {
    return (
        <div className="checkout">
            <div className="checkout__left">
                <img
                    src="https://m.media-amazon.com/images/G/31/AMS/IN/970X250-_desktop_banner.jpg"
                    alt=""
                    className="checkout_ad"
                />

                <div>
                    <h2 className="checkout__title">Your shopping Basket</h2>
                </div>
            </div>
            <div className="checkout__right">
                <Subtotal/>
            </div>
        </div>
    );
}

export default Checkout;
