/* eslint-disable react/prop-types */
import moment from 'moment';
import Swal from "sweetalert2";
import useAuth from "../../Hooks/useAuth";
import { useLocation, useNavigate } from "react-router-dom";
import useAxiosSecure from "../../Hooks/useAxiosSecure";

const Card = ({ item }) => {
  const { apartment_No, block_name, rent, floor_No, image } = item;
  const { user } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const axiosSecure = useAxiosSecure();

  const handleAgreement = (apartment) => {
    //console.log(user.email, apartment);
    if (user && user.email) {
      const requestedApartment = {
        userName: user.displayName,
        userEmail: user.email,
        Floor_no: apartment.floor_No,
        Block_name: apartment.block_name,
        Apartment_no: apartment.apartment_No,
        Rent: apartment.rent,
        requestDate:moment().format("YYYY-MM-DD"),
        Status: 'pending'
      };
      axiosSecure.post("/agreementRequests", requestedApartment).then((res) => {
        //console.log(res.data);
        if (res.data.insertedId) {
          Swal.fire({
            icon: "success",
            title: `Agreement Request Successful. You will be notified soon`,
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
    } else {
      Swal.fire({
        title: "You are not Logged In",
        text: "Please login For agreement",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Login",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login", { state: { from: location } });
        }
      });
    }
  };
  return (
    <div className="card bg-base-100 shadow-xl">
      <figure className="h-[300px]">
        <img className="h-full w-full" src={image} />
      </figure>
      <div className="card-body flex flex-col">
        <h2 className="card-title">Apartment NO: {apartment_No}</h2>
        <div className="flex">
          <p>
            Block: <span className="font-bold">{block_name}</span>
          </p>
          <p>
            Floor: <span className="font-bold">{floor_No}</span>
          </p>
          <p>
            Rent: <span className="font-bold">${rent}</span>
          </p>
        </div>
        <div className="card-actions justify-end">
          <button
            onClick={() => handleAgreement(item)}
            className="btn bg-[#64b6dfec] hover:bg-[#64b6dfec] border-0 border-b-4 border-[#21526bec]"
          >
            Agreement
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
