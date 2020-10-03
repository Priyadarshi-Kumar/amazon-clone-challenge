import React, { useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./Header";
import Checkout from "./Checkout";
import Home from "./Home";
import Login from "./Login";
import Orders from "./Orders";
import Payment from "./Payment";
import { auth } from "./Firebase";
import { useStateValue } from "./StateProvider";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

const promise = loadStripe(
    "pk_test_51H9llKIQjv73jHtAqenGfWbrKjsOR18SDkrdUoVpE4GYht083xMQvPwzZwSa0ijXevAaNx5x42smRRKWglK5onoc00Zpo8jYxR"
);

function App() {
    const [{}, dispatch] = useStateValue();
    useEffect(() => {
        auth.onAuthStateChanged((authUser) => {
            console.log(authUser);

            if (authUser) {
                dispatch({
                    type: "SET_USER",
                    user: authUser,
                });
            } else {
                dispatch({
                    type: "SET_USER",
                    user: null,
                });
            }
        });
    }, []);
    // BEM
    return (
        <Router>
            <div className="App">
                <Switch>
                    <Route path="/login">
                        <Login />
                    </Route>
                    <Route path="/orders">
                        <Orders />
                    </Route>
                    <Route path="/checkout">
                        <Header />
                        <Checkout />
                    </Route>
                    <Route path="/payment">
                        <Header />
                        <Elements stripe={promise}>
                            <Payment />
                        </Elements>
                    </Route>
                    <Route path="/">
                        <Header />
                        <Home />
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}

export default App;
