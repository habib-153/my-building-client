/* eslint-disable react/prop-types */

import Swal from "sweetalert2";
import useAuth from "../../Hooks/useAuth";
import { useLocation, useNavigate } from "react-router-dom";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import useCart from "../../Hooks/useCart";

const FoodCard = ({item}) => {
    const {name ,image, price, recipe, _id} = item
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
          name,image,price
        }
        axiosSecure.post('/carts', cartItem)
        .then(res => {
          console.log(res.data)
          if(res.data.insertedId){
            Swal.fire({
              //position: "top-end",
              icon: "success",
              title: `${name} added to cart`,
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
            // send the user to navigate page
            navigate('/login', {state: {from: location}})
          }
        });
      }
    }
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
  <figure><img src={image} alt={name} /></figure>
  <p className="bg-slate-900 absolute right-0 mr-4 mt-4 px-4 text-white">${price}</p>
  <div className="card-body flex flex-col items-center">
    <h2 className="card-title">{name}</h2>
    <p>{recipe}</p>
    <div className="card-actions justify-end">
    <button 
    onClick={() => handleAddToCart(item)}
    className="btn border-0 border-b-4 btn-outline">Add to Cart</button>
    </div>
  </div>
</div>
    );
};

export default FoodCard;