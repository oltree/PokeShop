import { useEffect } from "react";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import SignInLayout from "../components/SignInLayout";

import { auth, repeatAuth } from "../reducers";
import { LoginSchema } from "../validation";
import { authSelector } from "../selectors";
import { ROUTE_NAMES } from "../../../routes/routeNames";

const SignInContainer = () => {
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const { data, error, isLoading, isAuth } = useSelector(authSelector);

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
      }, 1000);

      return () => clearTimeout(timeout);
    }
  }, [isAuth, navigate]);

  useEffect(() => {
    if (error) {
      const timeout = setTimeout(() => {
        dispatch(repeatAuth());
      }, 3000);

      return () => clearTimeout(timeout);
    }
  }, [error, dispatch]);

  return (
    <SignInLayout
      formik={formik}
      data={data}
      error={error}
      isLoading={isLoading}
    />
  );
};

export default SignInContainer;
