import { Helmet } from "react-helmet-async";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import Cover from "../Shared/Cover";
import apartCover from "../../assets/assets/others/5.webp";
import Card from "../../Comnonent/Card/Card";
import SectionTitle from "../../Comnonent/SectionTitle/SectionTitle";
const Apartment = () => {
  const axiosPublic = useAxiosPublic();
  const { data: apartments = [] } = useQuery({
    queryKey: ["apartment"],
    queryFn: async () => {
      const res = await axiosPublic.get("/apartment");
      return res.data;
    },
  });
  return (
    <div className="">
      <Helmet>
        <title>My Building | Apartments</title>
      </Helmet>
      <Cover
        img={apartCover}
        description="Would you like to take One?"
        title="OUR Apartments"
      ></Cover>
      <div className="my-12">
        <SectionTitle heading="All Apartments"></SectionTitle>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {
            apartments?.map(apartment => <Card 
                item={apartment}
                key={apartment}></Card>)
        }
        </div>
      </div>
    </div>
  );
};

export default Apartment;
