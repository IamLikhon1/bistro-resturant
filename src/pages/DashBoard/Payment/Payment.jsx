import { loadStripe } from "@stripe/stripe-js";
import SectionTile from "../../../components/SectionTitle/SectionTile";
import CheckoutForm from "./CheckoutForm/CheckoutForm";
import { Elements } from "@stripe/react-stripe-js";
import useCart from "../../../hooks/useCart";

const stripePromise=loadStripe(import.meta.env.VITE_Payment_Gateway_PK)
const Payment = () => {
    const [cart]=useCart();
    const total=cart.reduce((sum,item)=>sum + item.price ,0);
    const price=parseFloat(total.toFixed(2))
    return (
        <div>
            <SectionTile subHeading='Please Process' heading='PAYMENT'></SectionTile>
           <h2 className="text-5xl">Taka De</h2>
           <Elements stripe={stripePromise}>
           <CheckoutForm cart={cart} price={price}></CheckoutForm>
           </Elements>
        </div>
    );
};

export default Payment;