import {
    FaBook,
  FaEnvelope,
  FaHome,
  FaList,
  FaUsers,
} from "react-icons/fa";
import { MdApartment, MdPayment } from "react-icons/md";
import { GrAnnounce } from "react-icons/gr";
import { RiCoupon3Line, RiProfileFill } from "react-icons/ri";
import { NavLink, Outlet } from "react-router-dom";
import useAdmin from "../Hooks/useAdmin";
import useMember from "../Hooks/useMember";

const Dashboard = () => {
  const [isAdmin] = useAdmin()
  const [isMember] = useMember()
  const NavOption = (
    <>
      {isAdmin ? (
            <>
              <li>
                <NavLink to="/dashboard/adminHome">
                  <FaHome></FaHome>Admin Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/addApartments">
                <MdApartment />Add Apartments
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/makeAnnouncement">
                  <GrAnnounce></GrAnnounce>Make Announcement
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/agreementRequests">
                  <FaBook></FaBook>Agreement Requests
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/manageMember">
                  <FaUsers></FaUsers>Manage Member
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/manageCoupon">
                <RiCoupon3Line />Manage Coupon
                </NavLink>
              </li>
            </>
          ) : isMember ? (
            <>
              <li>
                <NavLink to="/dashboard/memberHome">
                <RiProfileFill></RiProfileFill>My Profile
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/announcement">
                <GrAnnounce></GrAnnounce>Announcements
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/makePayment">
                <MdPayment />Make payment
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/paymentHistory">
                  <FaList></FaList>Payment History
                </NavLink>
              </li>
            </>
          ):(
            <>
            <li>
                <NavLink to="/dashboard/userHome">
                  <RiProfileFill></RiProfileFill>My Profile
                </NavLink>
              </li>
            <li>
                <NavLink to="/dashboard/announcement">
                <GrAnnounce></GrAnnounce>Announcements
                </NavLink>
              </li>
            </>
          )}
          <div className="divider"></div>
          <li>
            <NavLink to="/">
              <FaHome></FaHome>Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/apartment">
            <MdApartment />Apartments
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact">
              <FaEnvelope></FaEnvelope>Contact
            </NavLink>
          </li>
    </>
  )
  return (
    <div>
    <div className="md:flex">
      <div className="w-64 min-h-screen hidden lg:block bg-[#64b6dfec]">
        <ul className="menu">
          {isAdmin ? (
            <>
              <li>
                <NavLink to="/dashboard/adminHome">
                  <FaHome></FaHome>Admin Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/addApartments">
                <MdApartment />Add Apartments
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/makeAnnouncement">
                  <GrAnnounce></GrAnnounce>Make Announcement
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/agreementRequests">
                  <FaBook></FaBook>Agreement Requests
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/manageMember">
                  <FaUsers></FaUsers>Manage Member
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/manageCoupon">
                <RiCoupon3Line />Manage Coupon
                </NavLink>
              </li>
            </>
          ) : isMember ? (
            <>
              <li>
                <NavLink to="/dashboard/memberHome">
                <RiProfileFill></RiProfileFill>My Profile
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/announcement">
                <GrAnnounce></GrAnnounce>Announcements
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/makePayment">
                <MdPayment />Make payment
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/paymentHistory">
                  <FaList></FaList>Payment History
                </NavLink>
              </li>
            </>
          ):(
            <>
            <li>
                <NavLink to="/dashboard/userHome">
                  <RiProfileFill></RiProfileFill>My Profile
                </NavLink>
              </li>
            <li>
                <NavLink to="/dashboard/announcement">
                <GrAnnounce></GrAnnounce>Announcements
                </NavLink>
              </li>
            </>
          )}
          <div className="divider"></div>
          <li>
            <NavLink to="/">
              <FaHome></FaHome>Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/apartment">
            <MdApartment />Apartments
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact">
              <FaEnvelope></FaEnvelope>Contact
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="lg:hidden">
    <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost">
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
    </div>
      <div className="flex-1 p-3 md:p-8">
        <Outlet></Outlet>
      </div>
    </div>
    </div>
  );
};

export default Dashboard;
