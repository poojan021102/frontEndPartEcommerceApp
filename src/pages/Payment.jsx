import { useEffect, useState } from "react";

import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";
import { loadStripe } from "@stripe/stripe-js";
import { useSelector } from "react-redux";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Payment({onChange}) {
  const [clientSecret, setClientSecret] = useState("");
  const user = useSelector(state=>state.user);
  const navigate = useNavigate();
  const stripePromise = loadStripe("pk_test_51NIs5LSIzrSdBwlfn2Vsq5fERtGeuKrBXWOTfCUdKSJwY89BRg3XfYd9fNnkVGwtmXByURpIf2EjX5GTuXXQYT0O00dzCHD1OY");
  useEffect(() => {
    if(user.username === "") navigate('/login');
    else{
        let price = 0;
        for(let i = 0;i<user.cart.length;++i)price+=user.cart[i].price*user.cart[i].qty;
        const gstClientSecret = async () => {
          try{
              let resp = await axios.post("http://localhost:5252/create-payment-intent", {price:price})
              setClientSecret(resp.data.clientSecret);
          }
          catch(err){
              console.log(err);
          }
        }
        gstClientSecret();
      }
  },[]);

  return (
    <div style={{display:"flex", alignItems:"center", justifyContent:"center"}}>
        <div style={{width:"50%", marginTop:"30px"}}>
            <p style={{margin:"auto"}}>Pay</p>
        {clientSecret && stripePromise && (
            <Elements stripe={stripePromise} options={{ clientSecret }}>
            <CheckoutForm onChange={onChange}/>
            </Elements>
        )}
        </div>
      </div>
  );
}

export default Payment;