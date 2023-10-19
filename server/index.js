const express = require("express");
const app = express();
require("dotenv").config();
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);
const bodyParser = require("body-parser");
const cors = require("cors");

app.use(bodyParser.urlencoded({ extended:true }));
app.use(bodyParser.json());
app.use(cors());

app.post("/payment", cors(), async (req, res) => {
    const { amount, id } = req.body;
    try{
        const payment = await stripe.paymentIntents.create({
            amount, 
            currency: "usd",
            description: "Plunger Store",
            payment_method: id,
            confirm: true,
            automatic_payment_methods: {enabled: true, allow_redirects: "never"},
        });
        console.log("Payment", payment);
        res.json({
            message: "Payment Successful",
            success: true,
        });
    }
    catch(error) {
        console.log("Error", error);
        res.json({
            message: "Payment Failed",
            success: false,
        });
    }
});

app.listen(process.env.PORT || 4000, () => {
    console.log("Server is listening on port 4000");
});