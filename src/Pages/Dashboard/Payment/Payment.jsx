import { loadStripe } from "@stripe/stripe-js";
import SectionTitle from "../../../Comnonent/SectionTitle/SectionTitle";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "../CheckOutForm/CheckoutForm";
import { useLocation } from "react-router-dom";
import { useForm } from "react-hook-form";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";

const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_GATEWAY_PK);
const Payment = () => {
  const axiosSecure = useAxiosSecure();
  const location = useLocation();
  const { register, handleSubmit } = useForm();
  const data = location.state;
  const [rent, setRent] = useState(data.Rent);
  const [message, setMessage] = useState("")
  const { data: coupons = [], } = useQuery({
    queryKey: ["coupon"],
    queryFn: async () => {
      const res = await axiosSecure.get("/coupon");
      return res.data;
    },
  });
//    console.log(coupons);
  const applyCoupons =( coupons, code) =>{
    if(code){
        const coupon = coupons.find(c => c.code === code)
        if(coupon){
            const discount = parseFloat(coupon.value)
            const newRent = parseFloat(data.Rent) - discount;
            setRent(newRent)
            setMessage(`You have applied the coupon ${code} and saved $${discount}.`)
        }
        else{
            setRent(data.Rent); 
            setMessage(`The coupon ${code} is invalid or expired.`)
        }
    }
    else{
        setRent(data.rent)
        setMessage("")
    }
  }
  const onSubmit = (code) => {
    // console.log(code);
    applyCoupons(coupons, code.Coupon);
  };
  return (
    <div>
      <SectionTitle heading="Payment"></SectionTitle>
      <div>
        <h2>
          Rent: $<span className="font-bold">{rent}</span>
        </h2>
        <p>{message}</p>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-control">
            <label className="label">
              <span className="label-text font-semibold">Coupon</span>
            </label>
            <div className="flex items-center">
              <input
                type="text"
                {...register("Coupon", { required: true })}
                className="input input-bordered"
              />
              <button className="btn">Apply</button>
            </div>
          </div>
        </form>
      </div>
      <div className="mt-4 bg-base-300 rounded-lg p-8">
        <Elements stripe={stripePromise}>
          <CheckoutForm data={data} rent={rent}></CheckoutForm>
        </Elements>
      </div>
    </div>
  );
};

export default Payment;
