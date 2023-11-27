import useAuth from "../../../Hooks/useAuth";

const MemberHome = () => {
    const { user } = useAuth();
    return (
        <div>
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
            <p>Agreement accept date: </p>
            <p>Rented Apartment Info: </p>
          </div>
        </div>
      </div>
    </div>
    );
};

export default MemberHome;