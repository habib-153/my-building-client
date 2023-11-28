import useCart from "../../../Hooks/useCart";
// import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import {  useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import SectionTitle from "../../../Comnonent/SectionTitle/SectionTitle";

const MakePayment = () => {
  const { register, handleSubmit } = useForm();
  const [cart, ] = useCart();
  const totalRent = cart.reduce((sum, item) => sum + item.Rent, 0);
  // const axiosSecure = useAxiosSecure();
  const navigate = useNavigate()
  
  const onSubmit = (data) => {
    // console.log(data);
    if(data){
      navigate('/dashboard/payment',{state: data})
    }
  };
  return (
    <div>
      <SectionTitle heading="Pay The Rent"></SectionTitle>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-control">
          <label className="label">
            <span className="label-text font-semibold">Email</span>
          </label>
          <input
            type="text"
            {...register("userEmail", { required: true })}
            defaultValue={cart[0]?.userEmail}
            className="input input-bordered"
            readOnly
          />
        </div>
        <div className="grid gap-4 grid-cols-1 md:grid-cols-2">
          <div className="form-control">
            <label className="label">
              <span className="label-text font-semibold">Apartment No.</span>
            </label>
            <input
              type="text"
              {...register("Apartment_no", { required: true })}
              defaultValue={cart[0]?.Apartment_no}
              className="input input-bordered"
              readOnly
            />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text font-semibold">Rent</span>
            </label>
            <input
              type="number"
              {...register("Rent", { required: true })}
              defaultValue={totalRent}
              className="input input-bordered"
              readOnly
            />
          </div>
        </div>
        <div className="grid gap-4 grid-cols-1 md:grid-cols-2">
          <div className="form-control">
            <label className="label">
              <span className="label-text font-semibold">Block Name</span>
            </label>
            <input
              type="text"
              {...register("Block_name", { required: true })}
              defaultValue={cart[0]?.Block_name}
              className="input input-bordered"
              readOnly
            />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text font-semibold">Floor No.</span>
            </label>
            <input
              type="text"
              {...register("Floor_no", { required: true })}
              defaultValue={cart[0]?.Floor_no}
              className="input input-bordered"
              readOnly
            />
          </div>
        </div>
        <div className="form-control">
                <label className="label">
                  <span className="label-text font-semibold">Month</span>
                </label>
                <select defaultValue="default"
                  {...register("month", {required: true})}
                  className="select select-bordered w-full"
                >
                  <option value="default" disabled>
                    Select Month
                  </option>
                  <option value="January">January</option>
                  <option value="February">February</option>
                  <option value="March">March</option>
                  <option value="April">April</option>
                  <option value="May">May</option>
                  <option value="June">June</option>
                  <option value="July">July</option>
                  <option value="August">August</option>
                  <option value="September">September</option>
                  <option value="October">October</option>
                  <option value="November">November</option>
                  <option value="December">December</option>
                </select>
            </div>
            <div className="flex justify-evenly items-center">
        <button type="submit" className="btn mt-2 btn-outline">Pay</button>
      </div>
      </form>
    </div>
  );
};

export default MakePayment;
