import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import PaymentForm from "./PaymentForm";

const PUBLIC_KEY = "pk_test_51O2U8QBXULjC2V7jB8tyy5vU0Tdv5f49AuTVy8CI2M8VkE6zx2rQwAjgFkanwWKZES2iN3OvbTcN4X89RdFP2OAA000qWymIsD";
const stripePromise = loadStripe(PUBLIC_KEY);

const StripeContainer = () => {
    return (
        <Elements stripe={stripePromise}>
            <PaymentForm/>
        </Elements>
    );
}

export default StripeContainer;