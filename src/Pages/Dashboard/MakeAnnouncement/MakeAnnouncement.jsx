import Swal from "sweetalert2";
import SectionTitle from "../../../Comnonent/SectionTitle/SectionTitle";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";

const MakeAnnouncement = () => {
    const axiosSecure = useAxiosSecure();

    const handleSubmit = async(e) =>{
        e.preventDefault()
        const form = e.target;
        const title = form.title.value;
        const description = form.description.value;
        const newAnnouncement = {
            title, description
        }
        const res = await axiosSecure.post("/announcement", newAnnouncement);
    console.log(res.data);
    if (res.data.insertedId) {
      Swal.fire({
        icon: "success",
        title: "Announced",
        showConfirmButton: true,
        // timer: 1500
      });
    }
    }
    return (
        <div>
            <SectionTitle heading="Make Announcement" subHeading='Any notice?'></SectionTitle>
            <div>
            <form onSubmit={handleSubmit}>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text font-semibold">
                        Title
                      </span>
                    </label>
                    <input
                      type="text"
                      name="title"
                      placeholder="Enter Announcement Title"
                      className="input input-bordered"
                      required
                    />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text font-semibold">Description</span>
                    </label>
                    <textarea
                      type="text"
                      name="description"
                      placeholder="Description"
                      className="input h-20 input-bordered"
                      required
                    />
                  </div>
                  <button className="mt-4 btn btn-outline bg-[#64b6dfec]  btn-ghost hover:bg-[#64b6dfec]">
                    Announce
                  </button>
                </form>
            </div>
        </div>
    );
};

export default MakeAnnouncement;