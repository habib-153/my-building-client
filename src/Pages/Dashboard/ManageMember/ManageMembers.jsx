import { useQuery } from "@tanstack/react-query";
import SectionTitle from "../../../Comnonent/SectionTitle/SectionTitle";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { FaTrash,} from "react-icons/fa";
import Swal from "sweetalert2";

const AllUsers = () => {
  
  const axiosSecure = useAxiosSecure();
  const { data: users = [], refetch } = useQuery({
    queryKey: ["members"],
    queryFn: async () => {
      const res = await axiosSecure.get('/members');
      return res.data;
    },
  });

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
        axiosSecure.patch(`/users/${id}`).then((res) => {
          if (res.data.modifiedCount > 0) {
            refetch();
            Swal.fire({
              title: "Deleted!",
              icon: "success",
            });
          }
        });
      }
    });
  };
  return (
    <div>
      <div>
        <SectionTitle subHeading="" heading="Manage All Users"></SectionTitle>
      </div>
      <div className="overflow-x-auto p-6 mt-12 shadow-lg rounded-lg">
        <h2 className="text-3xl font-semibold py-4">
          TOTAL USER: {users.length}
        </h2>
        <table className="table ">
          {/* head */}
          <thead className="bg-orange-400 rounded-lg">
            <tr className="text-center">
              <th>#</th>
              <th>Name</th>
              <th>Email</th>
              <th className="text-center">Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, idx) => (
              <tr className="text-center" key={user._id}>
                <td>{idx + 1}</td>
                <th>
                  <p>{user.name}</p>
                </th>
                <th>
                  <p>{user.email}</p>
                </th>
                <th>
                  <button
                    onClick={() => handleDelete(user._id)}
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
  );
};

export default AllUsers;
