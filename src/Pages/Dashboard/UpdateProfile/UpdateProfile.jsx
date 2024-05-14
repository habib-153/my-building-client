import { Helmet } from "react-helmet-async";
import useAuth from "../../../Hooks/useAuth";
import { useForm } from "react-hook-form";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import Swal from "sweetalert2";
const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const UpdateProfile = () => {
  const axiosPublic = useAxiosPublic();
  const { user, updateUserProfile } = useAuth();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    // console.log(data);
    const imageFile = { image: data.photoURL[0] };
    const res = await axiosPublic.post(image_hosting_api, imageFile, {
      headers: {
        "content-type": "multipart/form-data",
      },
    });

    const imageURL = res.data.data.display_url;
    updateUserProfile(data.name, imageURL).then(async () => {
      const userInfo = {
        name: data.name,
        email: data.email,
      };
      const res = await axiosPublic.patch(`/users`, userInfo)
        if (res.data.modifiedCount > 0) {
          reset();
          Swal.fire({
            icon: "success",
            title: "User Updated Successfully",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };

  return (
    <div>
      <Helmet>
        <title>My Building | Update Profile</title>
      </Helmet>
      <div className="card mx-auto my-4 bg-base-100 shadow-xl">
          <figure className="w-full">
            <img className="w-[250px] rounded-full"
              src={user.photoURL}
              alt="img"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              Name: {user.displayName}
            </h2>
            <p>Email: {user.email}</p>
          </div>
        </div>

        <div className="card w-full shadow-2xl bg-base-100">
          <h1 className="text-5xl font-bold text-center">Update Profile</h1>
          <form onSubmit={handleSubmit(onSubmit)} className="card-body pb-4">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                defaultValue={user.displayName}
                placeholder="Name"
                {...register("name", { required: true })}
                className="input input-bordered"
              />
              {errors.name && <span>This field is required</span>}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Photo Url</span>
              </label>
              <input
                type="file"
                placeholder="photoUrl"
                {...register("photoURL", { required: true })}
                className="input input-bordered pt-2"
              />
              {errors.photoURL && <span>This field is required</span>}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                defaultValue={user.email}
                readOnly
                placeholder="email"
                {...register("email", { required: true })}
                className="input input-bordered"
              />
              {errors.email && <span>This field is required</span>}
            </div>
            <div className="form-control mt-6">
              <input className="btn btn-primary" type="submit" value="Update" />
            </div>
          </form>
        </div>
      </div>
  );
};

export default UpdateProfile;
