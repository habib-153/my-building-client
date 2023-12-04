import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../Hooks/useAuth";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { Helmet } from "react-helmet-async";

const MemberHome = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();

  const { data: bookedApartment = [] } = useQuery({
    queryKey: ["bookedApartment", user.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/bookedApartment/${user.email}`);
      return res.data;
    },
  });
  //console.log(bookedApartment);
  // const [{ AcceptedDate, Floor_no, Block_name, Apartment_no, Rent }] =
  //   bookedApartment;
  return (
    <div>
      <Helmet>
                <title>My Building | MemberHome</title>
            </Helmet>
      <h2 className="flex gap-3 items-center">
        <span>Hi, Welcome </span>
        <div className="text-2xl font-semibold">
          {user?.displayName ? user.displayName : "Back"}
        </div>
      </h2>
      <div className="w-full">
        <div className="card mx-auto bg-base-100 shadow-xl">
          <figure className="w-full">
            <img
              className="w-[250px] rounded-full"
              src={user.photoURL}
              alt="img"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Name: {user.displayName}</h2>
            <p>Email: {user.email}</p>
            <p>
              Agreement accept date:{" "}
              <span className="font-semibold">{bookedApartment?.map(apartment => <span key={apartment._id}>{apartment.AcceptedDate}</span>)}</span>
            </p>
            <div className="grid grid-cols-1">
              {
                bookedApartment?.map(apartment => <div key={apartment._id}>
                  <div className="p-2 bg-slate-100 rounded-lg">
                  <p className="font-bold">Rented Apartment Info: </p>
                  <div className="flex justify-between">
               <div>
                 <p>Floor: {apartment.Floor_no}</p>
                 <p>Block: {apartment.AcceptedDate}</p>
               </div>
               <div>
                 <p>Room No: {apartment.Apartment_no}</p>
                 <p>Rent: ${apartment.Rent}</p>
               </div>
             </div>
                  </div>
                </div>)
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MemberHome;
