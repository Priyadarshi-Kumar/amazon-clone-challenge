import { Link, useHistory } from "react-router-dom";
import React, {useEffect, useState} from "react";
import CheckoutProduct from "./CheckoutProduct";
import "./Payment.css";
import { useStateValue } from "./StateProvider";
import CurrencyFormat from "react-currency-format";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { getBasketTotal } from "./reducer";
import axios from './axios';
import { db } from "./Firebase";

function Payment() {
    const [{ basket, user }, dispatch] = useStateValue();
    const [error, setError] = useState(null);
    const [disabled, setDisabled] = useState(true)
    const [succeeded, setSucceeded] = useState(false)
    const [processing, setProcessing] = useState("")
    const [clientSecret, setClientSecret] = useState('')
    const history = useHistory();


    const stripe = useStripe();
    const elements = useElements();

    useEffect(() => {
        const getClientSecret = async () => {
            const response = await axios({
                method: 'post',
                url: `/payments/create?total=${getBasketTotal(basket) * 100}`
            })
            setClientSecret(response.data.clientSecret);
        }
        getClientSecret();
    }, [basket])

    const handleSubmit = async (e) => {
        e.preventDefault();
        setProcessing(true);
        const payload = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                description: "test",
                card: elements.getElement(CardElement)
            }
        }).then(({paymentIntent}) => {
            console.log("handleSubmit -> paymentIntent", paymentIntent)
            setSucceeded(true);
            setError(null);
            setProcessing(false);
            db.collection['users']
                .doc(user?.uid)
                .collection('orders')
                .doc(user?.uid + parseInt(Date.now()/1000))
                .set({
                    basket: basket,
                    amount: 100,
                    created: parseInt(Date.now()/1000),
                })
            dispatch({
                type: 'EMPTY_BASKET'
            })
            history.replace('/orders')
        })
    }
    const handleChange = (e) => {
        setDisabled(e.target);
        setError(e.error ? e.error : '')
    }
    return (
        <div className="payment">
            <div className="payment__container">
                <h1>
                    Checkout (<Link to="/checkout">{basket.length} items.</Link>
                    )
                </h1>
                <div className="payment__section">
                    <div className="payment__title">
                        <h3>Delivery Address</h3>
                    </div>
                    <div className="payment__address">
                        <p>{user?.email}</p>
                        <p>Bihar</p>
                        <p>India</p>
                    </div>
                </div>
                <div className="payment__section">
                    <div className="payment__title">
                        <h3>Review items and delivery</h3>
                    </div>
                    <div className="payment__items">
                        {basket.map((item, index) => (
                            <CheckoutProduct
                                key={index}
                                id={item.id}
                                image={item.image}
                                price={item.price}
                                rating={item.rating}
                                title={item.title}
                            />
                        ))}
                    </div>
                </div>
                <div className="payment__section">
                    <div className="payment__title">
                        <h3>Payment Method</h3>
                    </div>
                    <div className="payment__details">
                        <form onSubmit={handleSubmit}>
                            <CardElement onChange={handleChange}/>
                            <div className="payment__priceContainer">
                                <CurrencyFormat
                                    renderText={(value) => (
                                        <>
                                            <p>
                                                Subtotal {basket?.length} items: <strong>{`${value}`}</strong>
                                            </p>
                                        </>
                                    )}
                                    decimalScale={2}
                                    value={getBasketTotal(basket)} // Part of the homework
                                    displayType={"text"}
                                    thousandSeparator={true}
                                    prefix={"$"}
                            />
                            <button disabled = {processing || disabled || succeeded}>
                                    <span>{processing ? <p>Processing</p> : "Buy Now"}</span>
                            </button>
                            </div>
                            {error && <div>{error}</div>}
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Payment;
