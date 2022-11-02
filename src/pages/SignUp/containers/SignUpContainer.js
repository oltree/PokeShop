import { useEffect } from "react";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";

import SignUpLayout from "../components/SignUpLayout";

import { useFetching } from "../../../hooks";

import AuthService from "../../../services/AuthService";

import { SignUpSchema } from "../validation";
import { ROUTE_NAMES } from "../../../routes/routeNames";

const SignUpContainer = () => {
  const navigate = useNavigate();

  const [data, isLoading, error, makeRequest] = useFetching(
    AuthService.signUp,
    null,
    false
  );

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      firstName: "",
      lastName: "",
      gender: "",
      phone: "",
    },

    validationSchema: SignUpSchema,

    onSubmit: (values, { resetForm }) => {
      makeRequest(values);

      resetForm();
    },
  });

  useEffect(() => {
    if (data?.data.success) {
      const timeout = setTimeout(() => {
        navigate(ROUTE_NAMES.SIGN_IN);
      }, 2000);

      return () => clearTimeout(timeout);
    }
  }, [data, navigate]);

  useEffect(() => {
    if (error?.message) {
      error.response.data.message = null;
    }
  }, [error]);

  return (
    <SignUpLayout
      values={formik.values}
      errors={formik.errors}
      onChange={formik.handleChange}
      onBlur={formik.handleBlur}
      touched={formik.touched}
      onSubmit={formik.handleSubmit}
      data={data}
      error={error}
      isLoading={isLoading}
    />
  );
};

export default SignUpContainer;
