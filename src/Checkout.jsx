import React from "react";
import "./Checkout.css";
import Subtotal from "./Subtotal";
import { useStateValue } from "./StateProvider";
import CheckoutProduct from "./CheckoutProduct";

function Checkout() {
    const [{ basket }, dispatch] = useStateValue();
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
                    {basket.map((item, index) => (
                        <CheckoutProduct 
                            key={index}
                            id={item.id}
                            price={item.price}
                            image={item.image}
                            rating={item.rating}
                            title={item.title}
                        />
                    ))}
                    {/* <CheckoutProduct
                        key={123844}
                        id={1234}
                        price={24.44}
                        image="https://images-eu.ssl-images-amazon.com/images/G/31/AmazonVideo/2020/X-site/SingleTitle/TheBoyss2/3000x1200_Hero-Tall_p._CB404993994_.jpg"
                        rating={4}
                        title="This dsjhgjdsgkjndsjgfjds"
                    />
                    <CheckoutProduct
                        key={12344}
                        id={1234}
                        price={24.44}
                        image="https://images-eu.ssl-images-amazon.com/images/G/31/AmazonVideo/2020/X-site/SingleTitle/TheBoyss2/3000x1200_Hero-Tall_p._CB404993994_.jpg"
                        rating={4}
                        title="This dsjhgjdsgkjndsjgfjds"
                    /> */}
                </div>
            </div>
            <div className="checkout__right">
                <Subtotal />
            </div>
        </div>
    );
}

export default Checkout;
