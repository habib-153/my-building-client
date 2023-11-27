/* eslint-disable react/prop-types */

import Swal from "sweetalert2";
import useAuth from "../../Hooks/useAuth";
import { useLocation, useNavigate } from "react-router-dom";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import useCart from "../../Hooks/useCart";

const Card = ({item}) => {
    const {apartment_No ,block_name, rent, floor_No,image, _id} = item
    const {user} = useAuth()
    const navigate = useNavigate()
    const location = useLocation()
    const axiosSecure = useAxiosSecure()
    const [, refetch] = useCart()

    const handleAddToCart = food =>{
      console.log(user.email, food)
      if(user && user.email){
        const cartItem = {
          menuId : _id,
          email: user.email,
          
        }
        axiosSecure.post('/carts', cartItem)
        .then(res => {
          console.log(res.data)
          if(res.data.insertedId){
            Swal.fire({
              //position: "top-end",
              icon: "success",
              title: ` added to cart`,
              showConfirmButton: false,
              timer: 1500
            });
            //refetch cart to update the cart items
            refetch()
          }
        })
      }
      else{
        Swal.fire({
          title: "You are not Logged In",
          text: "Please login to add to the Cart",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Login"
        }).then((result) => {
          if (result.isConfirmed) {
            navigate('/login', {state: {from: location}})
          }
        });
      }
    }
    return (
        <div className="card bg-base-100 shadow-xl">
  <figure><img src={image}  /></figure>
  <div className="card-body flex flex-col">
    <h2 className="card-title">Apartment NO: {apartment_No}</h2>
    <div className="flex">
    <p>Block: <span className="font-bold">{block_name}</span></p>
    <p>Floor: <span className="font-bold">{floor_No}</span></p>
    <p>Rent: <span className="font-bold">${rent}</span></p>
    </div>
    <div className="card-actions justify-end">
    <button 
    onClick={() => handleAddToCart(item)}
    className="btn bg-[#64b6dfec] hover:bg-[#64b6dfec] border-0 border-b-4 border-[#21526bec]">Agreement</button>
    </div>
  </div>
</div>
    );
};

export default Card;