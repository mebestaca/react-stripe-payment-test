import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import PaymentForm from "./PaymentForm";

const PUBLIC_KEY = "pk_test_51NwpSpI3KnnmTNw6DMWSiOCBO5n9WNCQRyoRvuhs9Fh31Lfh7yh3YRt0ZYmApKv2c6ZrA7yKMPD1M8xz6m6fTB9N00vE780mJk";
const stripePromise = loadStripe(PUBLIC_KEY);

const StripeContainer = () => {
    return (
        <Elements stripe={stripePromise}>
            <PaymentForm/>
        </Elements>
    );
}

export default StripeContainer;