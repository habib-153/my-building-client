
import SectionTitle from "../../../Comnonent/SectionTitle/SectionTitle";
import { useForm } from "react-hook-form";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";
const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`

const AddItems = () => {
  const { register, handleSubmit } = useForm();
  const axiosPublic = useAxiosPublic()
  const axiosSecure = useAxiosSecure()

  const onSubmit = async (data) => {
    console.log(data);
    const imageFile = { image: data.image[0]}
    const res = await axiosPublic.post(image_hosting_api, imageFile,{
        headers: {
            'content-type': 'multipart/form-data'
        }
    })
    if(res.data.success){
        const apartment = {
            apartment_No: data.apartment_No,
            block_name: data.block_name,
            rent: parseFloat(data.rent),
            floor_No: data.floor_No,
            image: res.data.data.display_url
        }
        const apartmentRes = await axiosSecure.post('/apartment', apartment)
        console.log(apartmentRes.data)
        if(apartmentRes.data.insertedId){
            // show success popup
            Swal.fire({
                icon: "success",
                title: "New apartment added",
                showConfirmButton: false,
                timer: 1500
              });
        }
    }
  };

  return (
    <div>
      <Helmet>
                <title>My Building | AddApartment</title>
            </Helmet>
      <SectionTitle
        heading="Add A New Apartment"
        subHeading="---What's new?---"
      ></SectionTitle>
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="grid gap-4 grid-cols-1 md:grid-cols-2">
          <div className="form-control">
                <label className="label">
                  <span className="label-text font-semibold">Apartment No.</span>
                </label>
                <input
                  type="text"
                  {...register("apartment_No", {required: true})}
                  placeholder="Apartment No."
                  className="input input-bordered"
                  required
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text font-semibold">Rent</span>
                </label>
                <input
                  type="number"
                  {...register("rent", {required: true})}
                  placeholder="Rent"
                  className="input input-bordered"
                  required
                />
            </div>
          </div>
          <div className="grid gap-4 grid-cols-1 md:grid-cols-2">
          <div className="form-control">
                <label className="label">
                  <span className="label-text font-semibold">Block Name</span>
                </label>
                <input
                  type="text"
                  {...register("block_name", {required: true})}
                  placeholder="Block Name"
                  className="input input-bordered"
                  required
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text font-semibold">Floor No.</span>
                </label>
                <input
                  type="text"
                  {...register("floor_No", {required: true})}
                  placeholder="Floor No."
                  className="input input-bordered"
                  required
                />
              </div>
          </div>
            <div className="form-control w-full my-4">
            <label className="label">
              <span className="label-text font-semibold">Apartment image</span>
            </label>
                <input {...register("image", {required: true})} type="file" className="input input-bordered pt-2" />
            </div>
            <div className="w-full text-center">
                <button className="btn">
                Add
                </button>
            </div>
        </form>
      </div>
    </div>
  );
};

export default AddItems;
