import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import axios from "axios";
import { useState } from "react";

const CARD_OPTIONS = {
	iconStyle: "solid",
	style: {
		base: {
			iconColor: "#c4f0ff",
			color: "#ffc7ee",
			fontWeight: 500,
			fontFamily: "Roboto, Open Sans, Segoe UI, sans-serif",
			fontSize: "16px",
			fontSmoothing: "antialiased",
			":-webkit-autofill": { color: "#fce883" },
			"::placeholder": { color: "#87bbfd" }
		},
		invalid: {
			iconColor: "#ffc7ee",
			color: "#ffc7ee"
		}
	}
}

const PaymentForm = () => {
    const [success, setSuccess] = useState(false);
    const stripe = useStripe();
    const elements = useElements();

    const submitHandler = async (e) => {
        e.preventDefault();
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: "card",
            card: elements.getElement(CardElement)
        });

        if (!error) {
            try{
                const {id} = paymentMethod;
                const response = await axios.post("http://localhost:4000/payment", {
                    amount: 1000,
                    id
                });

                if (response.data.success) {
                    console.log("Payment Successful");
                    setSuccess(true);
                }
            }
            catch(error) {
                console.log("Error", error);
            }
        }
        else {
            console.log(error.message);
        }

    }


    return (
        <>
            {!success ?
                <form onSubmit={submitHandler}>
                    <fieldset className="FomrGroup">
                        <div className="FormRow">
                            <CardElement options={CARD_OPTIONS}/>
                        </div>
                    </fieldset>
                    <button>Pay</button>
                </form>
                :
                <div>
                    <h2>Payment Complete!</h2>
                </div>
            }
            
        </>
    );

}

export default PaymentForm;