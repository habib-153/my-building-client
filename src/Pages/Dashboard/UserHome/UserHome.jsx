import { Helmet } from "react-helmet-async";
import useAuth from "../../../Hooks/useAuth";

const UserHome = () => {
  const { user } = useAuth();
  return (
    <div>
      <Helmet>
                <title>My Building | UserHome</title>
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
            <img className="w-[250px] rounded-full"
              src={user.photoURL}
              alt="img"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              Name: {user.displayName}
            </h2>
            <p>Email: {user.email}</p>
            <p>Agreement accept date: None</p>
            <p>Rented Apartment Info: None</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserHome;
