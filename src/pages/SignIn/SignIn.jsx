import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";
import useAuth from "../../hooks/useAuth";
import toast from "react-hot-toast";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { FiMail } from "react-icons/fi";
import { LuLock } from "react-icons/lu";
import signImage from "../../assets/images/signImage.png";

const SignIn = () => {
  const { signInUser, googleSignIn } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();
  const axiosPublic = useAxiosPublic();

  // SignIn with Email and Password
  const handleLogin = async (event) => {
    event.preventDefault();

    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    if (!email && !password)
      return toast.error(`Please enter email and password!`);
    if (!email) return toast.error("Please enter email");
    if (!password) return toast.error("Please enter password");

    const toastId = toast.loading("Sign in user...");

    try {
      await signInUser(email, password);
      // Navigate after SignIn
      toast.success("Sign in successful", { id: toastId });
      if (location?.state) navigate(`${location?.state}`);
      else navigate("/");
    } catch (error) {
      toast.error("Error signing in user", { id: toastId });
      // console.error(error);
    }
  };

  // SignIn with Google
  const handleGoogleSignIn = async () => {
    const toastId = toast.loading("Sign in user...");
    try {
      const res = await googleSignIn();

      const user = {
        name: res?.user?.displayName,
        email: res?.user?.email,
        photo: res?.user?.photoURL,
      };

      // Save userData => Database
      await axiosPublic.post("/users", user);

      // Navigate after SignIn
      toast.success("Sign in successful", { id: toastId });
      if (location?.state) navigate(`${location?.state}`);
      else navigate("/");
    } catch (error) {
      toast.error("Error signing in user", { id: toastId });
      console.error(error);
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
              <span className="mt-15 inline-block">
                <img src={signImage} alt="" className="w-[350px] h-[350px]" />
              </span>
            </div>
          </div>
          <div className="w-full border-stroke dark:border-strokedark xl:w-1/2 xl:border-l-2">
            <div className="w-full p-4 sm:p-12.5 xl:p-17.5">
              <Link to={"/"} className="btn rounded ml-2 mb-4 mt-2 xl:hidden">
                &larr; Home
              </Link>
              <span className="mb-1.5 block font-medium text-center text-xl">
                SignIn Now!
              </span>
              <form onSubmit={handleLogin}>
                <div className="mb-4">
                  <label className="mb-2.5 block font-medium">Email</label>
                  <div className="relative">
                    <input
                      name="email"
                      type="email"
                      placeholder="Enter your email"
                      className="w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:focus:border-primary"
                    />

                    <span className="absolute right-4 top-4">
                      <FiMail />
                    </span>
                  </div>
                </div>

                <div className="mb-6">
                  <label className="mb-2.5 block font-medium">
                    Re-type Password
                  </label>
                  <div className="relative">
                    <input
                      name="password"
                      type="password"
                      placeholder="6+ Characters, 1 Capital letter"
                      className="w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-1outline-none focus:border-primary focus-visible:shadow-none ‰dark:focus:border-primary"
                    />

                    <span className="absolute right-4 top-4">
                      <LuLock />
                    </span>
                  </div>
                </div>

                <div className="mb-5">
                  <input
                    type="submit"
                    value="Sign In"
                    className="w-full cursor-pointer rounded-lg border border-primary bg-primary p-4 text-white transition hover:bg-opacity-90"
                  />
                </div>
              </form>
              <button
                onClick={handleGoogleSignIn}
                className="flex w-full items-center justify-center gap-3.5 rounded-lg border border-stroke bg-gray p-4 hover:bg-opacity-50 dark:hover:bg-opacity-50"
              >
                <FaGoogle />
                Sign in with Google
              </button>
              <div className="mt-6 text-center">
                <p>
                  {`Don't have any account? `}
                  <Link to="/signup" className="text-primary">
                    Sign Up
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

export default SignIn;
