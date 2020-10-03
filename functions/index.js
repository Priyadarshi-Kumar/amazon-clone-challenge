const functions = require('firebase-functions');
const express = require("express");
const cors = require("cors")
const stripe = require("stripe")("sk_test_51H9llKIQjv73jHtAcd8rKbp5oUHvcUtUQvNkqegNK2LdYRO7jw18B91cdP3pqc6l8zGaE3mEoF4idqCI6RpQ9WY200hcVmM0dP");

// API

// App config
const app = express();

// Middleware
app.use(cors({origin: true}))
app.use(express.json())

// API routes
app.get('/', (req, res) => res.status(200).send('Hello World'))
app.post('/payments/create', async(req, res) => {
    const total = req.query.total;
    const paymentIntent = await stripe.paymentIntents.create({
        amount: total,
        currency: "usd"
    })
    res.status(201).send({
        clientSecret: paymentIntent.client_secret
    })
})

// Listen Command
exports.api = functions.https.onRequest(app);


// Example endpoint
//http://localhost:5001/clone-a08fe/us-central1/api
