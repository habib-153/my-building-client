import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import SectionTitle from "../../../Comnonent/SectionTitle/SectionTitle";
import moment from "moment";
import Swal from "sweetalert2";

const AgreementRequest = () => {
  const axiosSecure = useAxiosSecure();
  const { data: agreementRequests = [], refetch } = useQuery({
    queryKey: ["agreementRequests"],
    queryFn: async () => {
      const res = await axiosSecure.get("/agreementRequests");
      return res.data;
    },
  });

  const handleAccept = async (item) => {
    const updatedAgreement = {
      Status: "checked",
      // checkingTime:moment().format("YYYY-MM-DD"),
    };

    const bookedAgreement = {
        userName: item.userName,
        userEmail: item.userEmail,
        Floor_no: item.Floor_no,
        Block_name: item.Block_name,
        Apartment_no: item.Apartment_no,
        Rent: item.Rent,
        requestDate:item.requestDate,
        AcceptedDate:moment().format("YYYY-MM-DD"),
    }
    // console.log(updatedAgreement, bookedAgreement)
    const res = await axiosSecure.patch(
      `/agreementRequests/${item._id}`,
      updatedAgreement
    );
    // console.log(res.data);
    if (res.data.modifiedCount > 0) {
      // show success popup
      axiosSecure.post("/bookedApartment", bookedAgreement).then((res) => {
        if (res.data.insertedId) {
            axiosSecure.patch(`/users/member/${item.userEmail}`).then((res) => {
                console.log(res.data);
                if (res.data.modifiedCount > 0) {
                //   refetch();
                  Swal.fire({
                    title: "Accepted",
                    text: `${item.userName} is a member Now`,
                    icon: "success",
                    showConfirmButton: false,
                    timer: 1500,
                  });
                }
              });
        }
      });
    //   Swal.fire({
    //     icon: "success",
    //     title: "Checked & Rejected",
    //     showConfirmButton: false,
    //     timer: 1500,
    //   });
      refetch();
    }
  };
  const handleReject = async (id) => {
    const updatedAgreement = {
      Status: "checked",
      // checkingTime:moment().format("YYYY-MM-DD"),
    };
    const res = await axiosSecure.patch(
      `/agreementRequests/${id}`,
      updatedAgreement
    );
    console.log(res.data);
    if (res.data.modifiedCount > 0) {
      // show success popup
      Swal.fire({
        icon: "success",
        title: "Checked & Rejected",
        showConfirmButton: false,
        timer: 1500,
      });
      refetch();
    }
  };
  return (
    <div>
      <SectionTitle heading="Agreement Requests"></SectionTitle>
      <div>
        <div className="overflow-x-auto p-6 mt-12 shadow-lg rounded-lg">
          <h2 className="text-3xl font-semibold py-4">
            TOTAL Request: {agreementRequests.length}
          </h2>
          <table className="table ">
            {/* head */}
            <thead className="bg-[#64b6dfec] rounded-lg">
              <tr className="">
                <th>#</th>
                <th>UserInfo</th>
                <th className="text-center">Apartment Details</th>
                <th className="">Status</th>
                <th className="text-center">Action</th>
              </tr>
            </thead>
            <tbody>
              {agreementRequests.map((agreement, idx) => (
                <tr className="" key={agreement._id}>
                  <td>{idx + 1}</td>
                  <th>
                    <p>Name: {agreement.userName}</p>
                    <p> Email: {agreement.userEmail}</p>
                  </th>
                  <th>
                    <div className="flex justify-between">
                      <p>Floor: {agreement.Floor_no}</p>
                      <p>Block: {agreement.Block_name}</p>
                    </div>
                    <div className="flex justify-between">
                      <p>Room No: {agreement.Apartment_no}</p>
                      <p>Rent: ${agreement.Rent}</p>
                    </div>
                    <p>Request Date: {agreement.requestDate}</p>
                  </th>
                  <th>
                    <p>{agreement.Status}</p>
                  </th>
                  <th className="text-center flex flex-col">
                    <button
                      onClick={() => handleAccept(agreement)}
                      className="btn btn-xs btn-ghost  text-green-600"
                    >
                      Accept
                    </button>
                    <button
                      onClick={() => handleReject(agreement._id)}
                      className="btn btn-xs btn-ghost mt-2  text-red-600"
                    >
                      Reject
                    </button>
                  </th>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AgreementRequest;
