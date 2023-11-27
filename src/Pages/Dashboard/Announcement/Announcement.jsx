import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import SectionTitle from "../../../Comnonent/SectionTitle/SectionTitle";

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
      <SectionTitle heading="Announcements"></SectionTitle>
      <div className="grid grid-cols-1 gap-4">
        {announcements?.map((announcement) => (
          <div key={announcement._id}>
            <div className="card bg-base-100 shadow-xl">
              <div className="card-body">
                <h2 className="card-title">Title: {announcement.title}</h2>
                <p>
                  <p className="font-bold">Description: </p>
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
