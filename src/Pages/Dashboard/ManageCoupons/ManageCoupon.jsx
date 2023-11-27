import Swal from "sweetalert2";
import SectionTitle from "../../../Comnonent/SectionTitle/SectionTitle";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import { FaTrash } from "react-icons/fa6";

const ManageCoupon = () => {
  const axiosSecure = useAxiosSecure();
  const { data: coupons = [], refetch } = useQuery({
    queryKey: ["coupon"],
    queryFn: async () => {
      const res = await axiosSecure.get("/coupon");
      return res.data;
    },
  });
  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const code = form.coupon_code.value;
    const expiration = form.expiration.value;
    const details = form.details.value;
    const value = form.value.value;
    const newCoupon = {
      code,
      expiration,
      details,
      value,
    };
    const res = await axiosSecure.post("/coupon", newCoupon);
    console.log(res.data);
    if (res.data.insertedId) {
      // show success popup
      Swal.fire({
        icon: "success",
        title: "New Coupon added",
        showConfirmButton: true,
        // timer: 1500
      });
    }
  };
  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/coupon/${id}`).then((res) => {
          if (res.data.deletedCount > 0) {
            refetch();
            Swal.fire({
              title: "Deleted!",
              icon: "success",
            });
          }
        });
      }
    });
}

  return (
    <div>
      <SectionTitle heading="Coupon Codes"></SectionTitle>
      <div>
        <div>
          <button
            onClick={() => document.getElementById("my_modal_5").showModal()}
            className="btn btn-outline"
          >
            Add New Coupon
          </button>
          <dialog
            id="my_modal_5"
            className="modal modal-bottom sm:modal-middle"
          >
            <div className="modal-box">
              <h3 className="font-bold text-lg text-center">Add New Coupon</h3>
              <form onSubmit={handleSubmit}>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text font-semibold">
                      Coupon code
                    </span>
                  </label>
                  <input
                    type="text"
                    name="coupon_code"
                    placeholder="Enter Coupon Code"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text font-semibold">
                      Expiration Date
                    </span>
                  </label>
                  <input
                    type="date"
                    name="expiration"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text font-semibold">
                      Coupon Details
                    </span>
                  </label>
                  <input
                    type="text"
                    name="details"
                    placeholder="Details"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text font-semibold">
                      Discount Amount
                    </span>
                  </label>
                  <input
                    type="text"
                    name="value"
                    placeholder="Discount Amount(Dollar)"
                    className="input input-bordered"
                    required
                  />
                </div>

                <button className="mt-4 btn btn-outline text-white bg-[#b76417]  btn-ghost hover:bg-[#da701a]">
                  Submit
                </button>
              </form>
              <div className="modal-action">
                <form method="dialog">
                  {/* if there is a button in form, it will close the modal */}
                  <button className="btn">Close</button>
                </form>
              </div>
            </div>
          </dialog>
        </div>
        <div>
          <div className="overflow-x-auto p-6 mt-12 shadow-lg rounded-lg">
            <h2 className="text-3xl font-semibold py-4">
              TOTAL COUPON: {coupons.length}
            </h2>
            <table className="table ">
              {/* head */}
              <thead className="bg-[#64b6dfec] rounded-lg">
                <tr className="text-center">
                  <th>#</th>
                  <th>Code</th>
                  <th>Expiration</th>
                  <th className="text-center">Discount</th>
                  <th className="text-center hidden md:block">Action</th>
                </tr>
              </thead>
              <tbody>
                {coupons.map((coupon, idx) => (
                  <tr className="text-center" key={coupon._id}>
                    <td>{idx + 1}</td>
                    <th>
                      <p>{coupon.code}</p>
                    </th>
                    <th>
                      <p>{coupon.expiration}</p>
                    </th>
                    <th>
                      <p>{coupon.value}</p>
                    </th>
                    <th>
                      <button
                        onClick={() => handleDelete(coupon._id)}
                        className="btn btn-ghost  text-red-600"
                      >
                        <FaTrash></FaTrash>
                      </button>
                    </th>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManageCoupon;
