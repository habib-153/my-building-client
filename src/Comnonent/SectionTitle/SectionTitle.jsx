/* eslint-disable react/prop-types */

const SectionTitle = ({heading, subHeading}) => {
    return (
        <div className="text-center md:w-[40%] mx-auto">
            <p className="text-[#824e2d] text-lg italic">{subHeading}</p>
            <p className="text-[#151515] border-[#64b6dfec] border-y-2 text-[35px] ">{heading}</p>
        </div>
    );
};

export default SectionTitle;