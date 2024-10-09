import { Link, useNavigate } from "react-router-dom";
import signImage from "../../assets/images/signImage.png";
import { FiMail } from "react-icons/fi";
import { LuLock, LuUser2 } from "react-icons/lu";
import { FaGoogle } from "react-icons/fa";
import { MdOutlineAddPhotoAlternate } from "react-icons/md";
import toast from "react-hot-toast";
import useAuth from "../../hooks/useAuth";
import useAxiosPublic from "../../hooks/useAxiosPublic";

// Imgbb API
const imgbbApiKey = import.meta.env.VITE_IMGBB_API_KEY;
const imgbbApiUrl = `https://api.imgbb.com/1/upload?key=${imgbbApiKey}`;

const SignUp = () => {
  const { googleSignIn, signUpUser, updateUserProfile } = useAuth();
  const axiosPublic = useAxiosPublic();
  const navigate = useNavigate();

  // SignUp with Google
  const handleGoogleSignIn = async () => {
    const toastId = toast.loading("Sign up user...");
    try {
      const res = await googleSignIn();

      const user = {
        name: res?.user?.displayName,
        email: res?.user?.email,
        photo: res?.user?.photoURL,
      };

      // Save userData => Database
      const gRes = await axiosPublic.post("/users", user);
      if (gRes.data.insertedId === null) {
        toast.success("Account exits with this email, Sign in user!", {
          id: toastId,
        });
      } else {
        toast.success("Sign up successful", { id: toastId });
      }
      if (location?.state) navigate(`${location?.state}`);
      else navigate("/");
    } catch (error) {
      toast.error("Error signing up user!", { id: toastId });
      console.error(error);
    }
  };

  // SignUp with Email and Password
  const handleSignUp = async (event) => {
    event.preventDefault();

    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const confirmPassword = form.confirmPassword.value;
    const photo = { image: form.photo.files[0] };
    console.log(email);
    // * Validations
    // If all fields are empty
    if (
      name === "" &&
      photo.image === undefined &&
      email === "" &&
      password === ""
    ) {
      return toast.error("All fields are required!");
    }
    // If name field is empty
    else if (name === "") {
      return toast.error("Please provide your name!");
    }
    // If email field is empty
    else if (email === "") {
      return toast.error("Please provide your email!");
    }
    // If photo field is empty
    else if (
      photo.image === undefined ||
      photo.image === null ||
      photo.image === ""
    ) {
      return toast.error("Please upload your photo!");
    }
    // If email field is not valid
    else if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)) {
      return toast.error("Please provide an valid email!");
    }
    // If password field is empty
    else if (password === "") {
      return toast.error("Password is required!");
    }
    // If password length is less than 6
    else if (password.length < 6) {
      return toast.error("Password must be at least 6 characters long!");
    }
    // If password does not have atleast one uppercase letter
    else if (!/[A-Z]/.test(password)) {
      return toast.error("Password must have an uppercase letter!");
    }
    // If confirmPassword field is empty
    else if (confirmPassword === "") {
      return toast.error("Confirm password is required!");
    }
    // If confirmPassword does not match password
    else if (password !== confirmPassword) {
      return toast.error("Passwords do not match!");
    }

    // SignUp
    const toastId = toast.loading("Registering user...");
    try {
      const imgbbRes = await axiosPublic.post(imgbbApiUrl, photo, {
        headers: {
          "content-type": "multipart/form-data",
        },
      });

      if (imgbbRes.data.success) {
        try {
          await signUpUser(email, password);
          await updateUserProfile(name, imgbbRes.data.data.display_url);

          const user = { name, email, photo: imgbbRes.data.data.display_url };

          const userRes = await axiosPublic.post("/users", user);
          if (!userRes.data.insertedId) {
            toast.error("User alredy exists with this email!", { id: toastId });
            return;
          }

          toast.success("Registration successful", { id: toastId });
          navigate("/");
        } catch (error) {
          toast.error(error.message, { id: toastId });
        }
      }
    } catch (error) {
      toast.error(error.message, { id: toastId });
    }
  };
  return (
    <div className="md:max-w-screen-sm lg:max-w-screen-md xl:max-w-screen-lg mx-auto">
      <div className="rounded-sm border border-stroke bg-white shadow-default">
        <div className="flex flex-wrap items-center relative">
          <div className="hidden w-full xl:block xl:w-1/2">
            <Link to={"/"} className="btn rounded absolute top-2 left-2">
              &larr; Home
            </Link>
            <div className="py-17.5 px-26 text-center">
              <p className="2xl:px-20">Signup to access your account.</p>
              <img src={signImage} alt="" className="w-[350px] h-[350px]" />
              <span className="mt-15 inline-block"></span>
            </div>
          </div>
          <div className="w-full border-stroke xl:w-1/2 xl:border-l-2">
            <div className="w-full p-4 sm:p-12.5 xl:p-17.5">
              <Link to={"/"} className="btn rounded ml-2 mb-4 mt-2 xl:hidden">
                &larr; Home
              </Link>
              <span className="mb-1.5 block font-medium text-xl text-center">
                SignUp Now!
              </span>
              <form onSubmit={handleSignUp} encType="multipart/form-data">
                <div className="mb-4">
                  <label className="mb-2.5 block font-medium">Name</label>
                  <div className="relative">
                    <input
                      type="text"
                      name="name"
                      placeholder="Enter your full name"
                      className="w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 outline-none focus:border-primary focus-visible:shadow-none dark:focus:border-primary"
                    />

                    <span className="absolute right-4 top-4">
                      <LuUser2 />
                    </span>
                  </div>
                </div>

                <div className="mb-4">
                  <label className="mb-2.5 block font-medium">Email</label>
                  <div className="relative">
                    <input
                      type="email"
                      name="email"
                      placeholder="Enter your email"
                      className="w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 outline-none focus:border-primary focus-visible:shadow-none dark:focus:border-primary"
                    />

                    <span className="absolute right-4 top-4">
                      <FiMail />
                    </span>
                  </div>
                </div>
                <div className="mb-4">
                  <label className="mb-2.5 block font-medium">Photo</label>
                  <div className="relative">
                    <input
                      type="file"
                      name="photo"
                      accept="image/*"
                      placeholder="Upoload photo"
                      className="w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 outline-none focus:border-primary focus-visible:shadow-none dark:focus:border-primary"
                    />

                    <span className="absolute right-4 top-4">
                      <MdOutlineAddPhotoAlternate />
                    </span>
                  </div>
                </div>

                <div className="mb-4">
                  <label className="mb-2.5 block font-medium">Password</label>
                  <div className="relative">
                    <input
                      type="password"
                      name="password"
                      placeholder="Enter your password"
                      className="w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 outline-none focus:border-primary focus-visible:shadow-none dark:focus:border-primary"
                    />

                    <span className="absolute right-4 top-4">
                      <LuLock />
                    </span>
                  </div>
                </div>

                <div className="mb-6">
                  <label className="mb-2.5 block font-medium">
                    Re-type Password
                  </label>
                  <div className="relative">
                    <input
                      type="password"
                      name="confirmPassword"
                      placeholder="Re-enter your password"
                      className="w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 outline-none focus:border-primary focus-visible:shadow-none dark:focus:border-primary"
                    />

                    <span className="absolute right-4 top-4">
                      <LuLock />
                    </span>
                  </div>
                </div>

                <div className="mb-5">
                  <input
                    type="submit"
                    value="Create account"
                    className="w-full cursor-pointer rounded-lg border border-primary bg-primary p-4 transition hover:bg-opacity-90 text-white"
                  />
                </div>
              </form>
              <button
                onClick={handleGoogleSignIn}
                className="flex w-full items-center justify-center gap-3.5 rounded-lg border border-stroke bg-gray p-4 hover:bg-opacity-50 dark:hover:bg-opacity-50"
              >
                <span>
                  <FaGoogle />
                </span>
                Sign up with Google
              </button>

              <div className="mt-6 text-center">
                <p>
                  {`Already have an account? `}
                  <Link to="/signin" className="text-primary">
                    Sign in
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
