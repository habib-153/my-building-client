import SectionTitle from "../../../Comnonent/SectionTitle/SectionTitle";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";

const Coupon = () => {

    const axiosPublic = useAxiosPublic();
  const { data: coupons = [],  } = useQuery({
    queryKey: ["coupon"],
    queryFn: async () => {
      const res = await axiosPublic.get("/coupon");
      return res.data;
    },
  });

    return (
        <div className="my-4 mx-2">
            <SectionTitle heading='COUPONS' subHeading='Want Some discount?'></SectionTitle>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4  mt-4"> 
            {
                coupons.map(coupon =><div key={coupon._id} className="flex bg-[#F9F2ED] rounded-xl items-center justify-between">
                    <div className="p-4 lg:p-8 text-center space-y-2">
                        <h2 className="text-2xl md:text-5xl font-bold">{coupon.code}</h2>
                        <p className="border-b-2 border-black p-2">Valid Until <span className="font-bold">{coupon.expiration}</span></p>
                        <p className="text-xs">{coupon.details}</p>
                    </div>
                    <div className="border-l-2 border-dashed border-black p-4 lg:p-8 text-center space-y-2 ">
                        <p className="text-xl font-semibold">COUPON</p>
                        <p className="text-3xl lg:text-5xl font-extrabold">${coupon.value}</p>
                    </div>
                </div>)
            }
        </div>
        </div>
        
    );
};

export default Coupon;