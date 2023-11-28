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
  return (
    <div className="flex">
      <div className="w-64 min-h-screen bg-[#64b6dfec]">
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
      <div className="flex-1 p-8">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Dashboard;
