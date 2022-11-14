import { useEffect } from "react";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import SignInLayout from "../components/SignInLayout";

import { auth } from "../reducers";

import { authSelector } from "../selectors";

import { LoginSchema } from "../validation";
import { ROUTE_NAMES } from "../../../routes/routeNames";

const SignInContainer = () => {
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const { error, isLoading, isAuth } = useSelector(authSelector);

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },

    validationSchema: LoginSchema,

    onSubmit: (values, { resetForm }) => {
      dispatch(auth(values));

      resetForm();
    },
  });

  useEffect(() => {
    if (isAuth) {
      const timeout = setTimeout(() => {
        navigate(ROUTE_NAMES.SHOP);
      }, 500);

      return () => clearTimeout(timeout);
    }
  }, [isAuth, navigate]);

  return (
    <SignInLayout
      error={error}
      values={formik.values}
      touched={formik.touched}
      errors={formik.errors}
      onSubmit={formik.handleSubmit}
      onChange={formik.handleChange}
      onBlur={formik.handleBlur}
      isAuth={isAuth}
      isLoading={isLoading}
    />
  );
};

export default SignInContainer;
