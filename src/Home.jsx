import React from "react";
import "./Home.css";

import Product from "./Product";

function Home() {
    return (
        <div className="home">
            <div className="home__container">
                <img
                    className="home__image"
                    src="https://images-eu.ssl-images-amazon.com/images/G/31/AmazonVideo/2020/X-site/SingleTitle/TheBoyss2/3000x1200_Hero-Tall_p._CB404993994_.jpg"
                    alt=""
                />
                <div className="home__row">
                    <Product
                        id="1"
                        title="Iphone 11"
                        price={699.99}
                        image="https://images-na.ssl-images-amazon.com/images/I/51kGDXeFZKL._SL1024_.jpg"
                        rating={4}
                    />
                    <Product
                        id="2"
                        title="Mac"
                        price={1099.99}
                        image="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSg3hmMnPJoK6VrfH2pZ2czfbSqJ7ksHcLhPQ&usqp=CAU"
                        rating={4}
                    />
                </div>
                <div className="home__row">
                    <Product
                        id="3"
                        title="Dhaniya"
                        price={2.99}
                        image="https://images-na.ssl-images-amazon.com/images/I/415i7SgZdOL.jpg"
                        rating={4}
                    />
                    <Product
                        id="4"
                        title="Adrak"
                        price={9.99}
                        image="https://images-na.ssl-images-amazon.com/images/I/61hsje-%2BPYL._SL1500_.jpg"
                        rating={4}
                    />
                    <Product
                        id="5"
                        title="Lehsun"
                        price={3.99}
                        image="https://images-na.ssl-images-amazon.com/images/I/61ISKQLF1oL._SL1500_.jpg"
                        rating={4}
                    />
                </div>
                <div className="home__row">
                    <Product
                        id="6"
                        title="Iphone 11"
                        price={29.99}
                        image="https://images-na.ssl-images-amazon.com/images/I/51kGDXeFZKL._SL1024_.jpg"
                        rating={4}
                    />
                </div>
            </div>
        </div>
    );
}

export default Home;
