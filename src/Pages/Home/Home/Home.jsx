import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";
import AboutBuilding from "../AboutBuilding/AboutBuilding";

const Home = () => {
    return (
        <div className="">
            <Helmet>
                <title>My Building | Home</title>
            </Helmet>
            <Banner></Banner>
            <AboutBuilding></AboutBuilding>
            
        </div>
    );
};

export default Home;