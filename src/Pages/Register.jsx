import React, { useContext } from "react";
import svg from "/images/others/authentication2.png";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthProvider";
import toast from "react-hot-toast";
import { useFormik } from "formik";
import { signUpSchema } from "../../src/schemas";
import client from "../api";
import { FcGoogle } from "react-icons/fc";

const initialValues = {
  name: "",
  email: "",
  password: "",
  image: "",
};

const Register = () => {
  const navigate = useNavigate();
  const Location = useLocation();
  const from = Location.state?.from?.pathname || "/";
  const { signUp, editProfile, loading, setLoading, googleSignIn } =
    useContext(AuthContext);

  // ***********************=== Formik ===*********************

  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: initialValues,
      validationSchema: signUpSchema,
      onSubmit: (values) => {
        console.log(values);
        const { email, password, name, image } = values;
        signUp(email, password)
          .then((result) => {
            console.log(result);
            editProfile({ displayName: name, photoURL: image }).then(() => {
              const userInfo = {
                name: name,
                email: email,
              };
              client.post("/users", userInfo).then(({ data }) => {
                if (data.insertedId) {
                  console.log("users inserted to the databse!");
                  toast.success("Account created successfully!");
                  navigate(from, { replace: true });
                  window.location.reload();
                }
              });
            });
          })
          .catch((error) => {
            setLoading(false);
            toast.error(error);
          });
      },
    });

  const handleGoogleSignIn = () => {
    googleSignIn()
      .then((result) => {
        console.log(result.user);
        const userInfo = {
          email: result.user?.email,
          name: result.user?.displayName,
        };
        client.post("/users", userInfo).then(({ data }) => {
          console.log(data);
          toast.success("Login successfully!");
          navigate(from, { replace: true });
          window.location.reload();
        });
      })
      .catch((error) => {
        toast.error(error);
      });
  };

  return (
    <div className="flex justify-between items-center max-w-6xl mx-auto">
      <div className="hidden lg:block">
        <img src={svg} alt="p-2 rounded" />
      </div>
      <div className=" my-6 shadow-xl p-8">
        <p className="text-2xl">Sign Up</p>
        <p className="mt-2 font-normal">
          Nice to meet you! Enter your details to register.
        </p>
        <div className="mt-6 mb-2 lg:w-80 max-w-screen-lg sm:w-96">
          <form onSubmit={handleSubmit} className="mb-1 flex flex-col gap-6">
            <p className="-mb-3">Your Name</p>
            <input
              size="lg"
              name="name"
              placeholder="name"
              className="p-2 rounded"
              value={values.name}
              onBlur={handleBlur}
              onChange={handleChange}
            />
            {errors.name && touched.name ? (
              <p className="form-error"> {errors.name} </p>
            ) : null}
            <p className="-mb-3">Your Email</p>
            <input
              size="lg"
              name="email"
              placeholder="name@mail.com"
              className="p-2 rounded"
              value={values.email}
              onBlur={handleBlur}
              onChange={handleChange}
            />
            {errors.email && touched.email ? (
              <p className="form-error"> {errors.email} </p>
            ) : null}
            <p className="-mb-3">Password</p>
            <input
              className="p-2 rounded"
              type="password"
              name="password"
              id="password"
              placeholder="•••••••••"
              value={values.password}
              onBlur={handleBlur}
              onChange={handleChange}
            />
            {errors.password && touched.password ? (
              <p className="form-error"> {errors.password} </p>
            ) : null}
            <p className="-mb-3">Photo URL</p>
            <input
              type="text"
              size="lg"
              name="image"
              placeholder="https//yourimagelink.com/"
              className="p-2 rounded"
              value={values.image}
              onBlur={handleBlur}
              onChange={handleChange}
            />
            <button
              type="submit"
              disabled={loading}
              color="teal"
              className="mt-2 btn"
            >
              {loading ? "Loading" : "Sign up"}
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
          <p color="gray" className="mt-4 text-center font-normal">
            Already have an account?{" "}
            <Link
              to="/login"
              className="font-medium hover:text-yellow-600 hover:underline"
            >
              Sign In
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
