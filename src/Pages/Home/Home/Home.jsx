import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";
import AboutBuilding from "../AboutBuilding/AboutBuilding";
import Location from "../Location/Location";
import Coupon from "../Coupon/Coupon";

const Home = () => {
    return (
        <div className="">
            <Helmet>
                <title>My Building | Home</title>
            </Helmet>
            <Banner></Banner>
            <AboutBuilding></AboutBuilding>
            <Coupon></Coupon>
            <Location></Location>
        </div>
    );
};

export default Home;