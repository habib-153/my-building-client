import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Provider/AuthProvider";
import useAdmin from "../../../Hooks/useAdmin";
import navImg from '../../../assets/assets/others/logo3.webp'
const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [isAdmin] = useAdmin();

  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.log(error));
  };
  const NavOption = (
    <>
      <li>
        <Link className="text-white mx-5" to="/">
          Home
        </Link>
      </li>
      <li>
        <Link className="text-white mx-5" to="apartment">
          Apartment
        </Link>
      </li>
      {user ? undefined : (
        <>
          <li>
            <Link className="text-white mx-5" to="login">
              Login
            </Link>
          </li>
        </>
      )}
    </>
  );
  return (
    <>
      <div className="navbar max-w-screen-xl fixed z-10 bg-opacity-30 bg-black text-white ">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {NavOption}
            </ul>
          </div>
          <div className="flex items-center gap-3">
          <img className="w-[50px] h-[50px] rounded-full" src={navImg} alt="" />
          <p className="text-lg md:text-3xl font-semibold">
            My Building
          </p>
        </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu-horizontal px-1 items-center">{NavOption}</ul>
        </div>
        <div className="navbar-end">
          {user?.email ? (
            <div className="dropdown dropdown-end">
              <div className="tooltip tooltip-left" data-tip={user.displayName}>
                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                  <div className="w-11 rounded-full">
                    <img src={user.photoURL} alt={user.displayName} />
                  </div>
                </label>
              </div>
              <ul
                tabIndex={0}
                className="dropdown-content text-center mt-3 z-[1] p-2 shadow bg-[#434543c3] rounded-box w-52"
              >
                <li>
                  <p className="text-white w-full text-center font-semibold">
                    {user.displayName}
                  </p>
                </li>
                {user && isAdmin && (
                  <li>
                    <Link
                      className="text-white border-0 btn btn-sm btn-outline"
                      to="/dashboard/adminHome"
                    >
                      Dashboard
                    </Link>
                  </li>
                )}
                {/* {user && isAdmin && (
                  <li>
                    <Link
                      className="text-white border-0 btn btn-sm btn-outline"
                      to="/dashboard/memberHome"
                    >
                      Dashboard
                    </Link>
                  </li>
                )} */}
                {user && !isAdmin && (
                  <li>
                    <Link
                      className="text-white border-0 btn btn-sm btn-outline"
                      to="/dashboard/userHome"
                    >
                      Dashboard
                    </Link>
                  </li>
                )}
                <li>
                  <button
                    onClick={handleLogOut}
                    className="btn btn-sm btn-outline text-white border-0"
                  >
                    Logout
                  </button>
                </li>
              </ul>
            </div>
          ) : undefined}
        </div>
      </div>
    </>
  );
};

export default Navbar;
