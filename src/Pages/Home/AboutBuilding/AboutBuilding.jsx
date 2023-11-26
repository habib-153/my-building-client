import SectionTitle from "../../../Comnonent/SectionTitle/SectionTitle";
import Img from '../../../assets/assets/others/logo3.webp'
import moment from 'moment';
const AboutBuilding = () => {
    return (
        <div className="background bg-fixed h-600px pt-10">
            <SectionTitle subHeading='Check it out' heading='About Our Building'></SectionTitle>
            <div className="md:flex justify-center items-center pb-20 pt-12 px-8 md:px-20 lg:px-36 my-6">
                <div>
                    <img src={Img} alt="" />
                </div>
                <div className="max-w-[604px] md:ml-10 space-y-4">
                    <p className="font-semibold">{moment().format("dddd, MMMM D, YYYY")}</p>
                    <p className="italic">Imagine living in a luxurious and spacious apartment with stunning views of the city skyline, surrounded by all the amenities and conveniences you need. That’s what our buildings offers you: a dream home in the heart of the city.</p>
                    <p className="text-[#000]">
                    Here You will get a rooftop pool and spa, a fitness center and yoga studio, a lounge and party room, a business center and library, and a concierge, valet, and security service. It’s pet-friendly and eco-friendly, too.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default AboutBuilding;