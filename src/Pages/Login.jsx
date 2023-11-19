import { Link, useLocation, useNavigate } from "react-router-dom";
import svg from "/images/others/authentication2.png";
import { useContext } from "react";
import { AuthContext } from "../context/AuthProvider";
import toast from "react-hot-toast";
import { FcGoogle } from "react-icons/fc";

const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";

  const { signIn, googleSignIn, loading } = useContext(AuthContext);

  const handleEmailLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    signIn(email, password)
      .then((result) => {
        toast.success("Login successfully!");
        setTimeout(() => {
          navigate(from, { replace: true });
        }, 1500);
      })
      .catch((error) => {
        toast.error(error);
      });

    form.reset();
  };

  const handleGoogleSignIn = () => {
    googleSignIn()
      .then((result) => {
        toast.success("Login successfully!");
        setTimeout(() => {
          navigate(from, { replace: true });
        }, 1500);
      })
      .catch((error) => {
        toast.error(error);
      });
  };

  return (
    <div className="lg:flex justify-between items-center max-w-6xl mx-auto">
      <div className="hidden lg:block">
        <img src={svg} alt="" />
      </div>
      <div className="mt-6 shadow-xl p-8">
        <p className="text-2xl">Sign In</p>
        <p className="mt-1 font-normal">
          Nice to see you Again! Enter your details to Login.
        </p>
        <div className="mt-6 mb-2 lg:w-80 max-w-screen-lg ">
          <form
            onSubmit={handleEmailLogin}
            className="mb-1 flex flex-col gap-6"
          >
            <p className="-mb-3">Your Email</p>
            <input
              size="lg"
              name="email"
              placeholder="name@mail.com"
              className="p-2 rounded"
            />
            <p className="-mb-3">Password</p>
            <input
              type="password"
              size="lg"
              name="password"
              placeholder="********"
              className="p-2 rounded"
            />
            <button
              disabled={loading}
              type="submit"
              className="btn disabled:bg-yellow-600/50"
            >
              {loading ? "Loading" : "Sign in"}
            </button>
          </form>
          <div className="flex items-center justify-between mt-4">
            <span className="w-1/5 border-b lg:w-1/5"></span>

            <a
              href="#"
              className="text-xs text-center text-gray-500 uppercase hover:underline"
            >
              or login with Social Media
            </a>
            <span className="w-1/5 border-b lg:w-1/5"></span>
          </div>
          <button
            onClick={() => handleGoogleSignIn()}
            type="submit"
            className="btn btn-outline mt-4 w-full mx-auto"
          >
            <span className="text-lg">
              <FcGoogle></FcGoogle>
            </span>
            Sign In With Google
          </button>
          <p className="mt-4 text-center font-normal">
            Do not have an account?{" "}
            <Link
              to="/register"
              className="font-medium hover:text-yellow-500 hover:underline"
            >
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
