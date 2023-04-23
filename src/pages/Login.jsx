import React, { useEffect } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../features/user/userSlice";

function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const userGlobal = useSelector((state) => state.user.user);

  const handleLoginUser = async (value) => {
    dispatch(loginUser(value));
  };

  const loginSchema = Yup.object().shape({
    email: Yup.string()
      .required("Email cannot be empty")
      .email("Wrong email format"),
    password: Yup.string()
      .required("Password cannot be empty")
      .min(3, "password to short"),
  });

  useEffect(() => {
    if (userGlobal.id > 0) {
      navigate("/dashboard");
    }
  }, [userGlobal]);

  return (
    <div>
      <Formik
        initialValues={{ email: "", password: "" }}
        validationSchema={loginSchema}
        onSubmit={(value) => {
          handleLoginUser(value);
        }}
      >
        {(props) => {
          return (
            <>
              <div className="flex min-h-full items-center justify-center px-4 py-12 sm:px-6 lg:px-8">
                <div className="w-full max-w-md space-y-8">
                  <div>
                    <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
                      Login your account
                    </h2>
                  </div>
                  <Form className="mt-8 space-y-6" action="#" method="POST">
                    <input type="hidden" name="remember" defaultValue="true" />
                    <div className=" rounded-md shadow-sm">
                      <div className="my-1">
                        <label htmlFor="email-address" className="sr-only">
                          Email address
                        </label>
                        <Field
                          id="email-address"
                          name="email"
                          type="email"
                          autoComplete="email"
                          required
                          className="relative block w-full rounded-md border-0 p-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                          placeholder="Email address"
                        />
                        <ErrorMessage
                          component="div"
                          name="email"
                          style={{ color: "red", fontSize: "10px" }}
                        />
                      </div>
                      <div className="my-1">
                        <label htmlFor="password" className="sr-only">
                          Password
                        </label>
                        <Field
                          id="password"
                          name="password"
                          type="password"
                          autoComplete="current-password"
                          required
                          className="relative block w-full rounded-md border-0 p-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                          placeholder="Password"
                        />
                        <ErrorMessage
                          component="div"
                          name="password"
                          style={{ color: "red", fontSize: "10px" }}
                        />
                      </div>
                    </div>

                    <div>
                      <button
                        type="submit"
                        className="group relative flex w-full justify-center rounded-md bg-cyan-600 px-3 py-2 text-sm font-semibold text-white hover:bg-blue-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                      >
                        Login
                      </button>
                    </div>
                  </Form>
                </div>
              </div>
            </>
          );
        }}
      </Formik>
    </div>
  );
}

export default Login;
