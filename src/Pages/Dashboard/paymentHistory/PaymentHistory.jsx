/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../Hooks/useAuth";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { Helmet } from "react-helmet-async";

const PaymentHistory = () => {
    const { user } = useAuth()
    const axiosSecure = useAxiosSecure()

    const { data: payments =[] } = useQuery({
        queryKey: ['payments', user.email],
        queryFn: async() =>{
            const res = await axiosSecure.get(`/payments/${user.email}`)
            return res.data;
        }
    })
    console.log(payments)
    return (
        <div>
          <Helmet>
                <title>My Building | Payment History</title>
            </Helmet>
            <div className="overflow-x-auto p-6 mt-12 shadow-lg rounded-lg">
        <h2 className="text-3xl font-semibold py-4">
          TOTAL Payment: {payments.length}
        </h2>
        <table className="table ">
          {/* head */}
          <thead className="bg-[#64b6dfec] rounded-lg">
            <tr className="">
              <th>#</th>
              <th>Member Info</th>
              <th>Payment Info</th>
              <th className="">Transaction Id</th>
            </tr>
          </thead>
          <tbody>
            {payments.map((payment, idx) => (
              <tr className="" key={payment._id}>
                <td>{idx + 1}</td>
                <th>
                <p>Email: {payment.email}</p>
                </th>
                <th>
                <p>Month: {payment.month}</p>
                <p>Paid: ${payment.rent}</p>
                <p>Date: {payment.date}</p>
                </th>
                <th>
                  ${payment.transactionId}
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
        </div>
    );
};

export default PaymentHistory;
