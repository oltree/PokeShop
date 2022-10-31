import { NavLink } from "react-router-dom";

import FormInput from "../../../../commonComponents/FormInput";
import FormInputPassword from "../../../../commonComponents/FormInputPassword";

import { ROUTE_NAMES } from "../../../../routes/routeNames";

import styles from "./index.module.scss";

const SignInFrom = ({ formik }) => (
  <div className={styles.wrapper}>
    <h2 className={styles.subtitle}>Welcome back</h2>
    <h1 className={styles.title}>Login to Your Account</h1>

    <form onSubmit={formik.handleSubmit} className={styles.form}>
      <FormInput
        variant="standard"
        name="email"
        type="email"
        errors={formik.errors.email}
        value={formik.values.email}
        onFormikChange={formik.handleChange}
        onBlur={formik.handleBlur}
        touched={formik.touched.email}
      />

      <FormInputPassword
        name="password"
        errors={formik.errors.password}
        value={formik.values.password}
        onFormikChange={formik.handleChange}
        onBlur={formik.handleBlur}
        touched={formik.touched.password}
      />

      <button type="submit" className={styles.button}>
        Sign In
      </button>
    </form>

    <div className={styles.register}>
      <NavLink className={styles.link} to={ROUTE_NAMES.SIGN_UP}>
        Don&apos;t have an account?
      </NavLink>
    </div>
  </div>
);

export default SignInFrom;
