import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import SectionTitle from "../../../Comnonent/SectionTitle/SectionTitle";
import { Helmet } from "react-helmet-async";

const Announcement = () => {
  const axiosPublic = useAxiosPublic();
  const { data: announcements = [] } = useQuery({
    queryKey: ["announcement"],
    queryFn: async () => {
      const res = await axiosPublic.get("/announcement");
      return res.data;
    },
  });
  return (
    <div>
      <Helmet>
                <title>My Building | Announcements</title>
            </Helmet>
      <SectionTitle heading="Announcements"></SectionTitle>
      <div className="grid grid-cols-1 gap-4">
        {announcements?.map((announcement) => (
          <div key={announcement._id}>
            <div className="card bg-base-100 shadow-xl">
              <div className="card-body">
                <h2 className="card-title">Title: {announcement.title}</h2>
                <p>
                  <span className="font-bold">Description: </span>
                  {announcement.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Announcement;
