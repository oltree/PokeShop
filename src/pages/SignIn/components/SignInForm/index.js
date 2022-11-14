import { NavLink } from "react-router-dom";
import { PropTypes } from "prop-types";

import FormInput from "../../../../commonComponents/FormInput";
import FormInputPassword from "../../../../commonComponents/FormInputPassword";

import { ROUTE_NAMES } from "../../../../routes/routeNames";

import styles from "./index.module.scss";

const SignInFrom = ({
  errors,
  values,
  touched,
  onSubmit,
  onChange,
  onBlur,
}) => (
  <div className={styles.wrapper}>
    <h2 className={styles.subtitle}>Welcome back</h2>
    <h1 className={styles.title}>Login to Your Account</h1>

    <form onSubmit={onSubmit} className={styles.form}>
      <FormInput
        variant="standard"
        name="email"
        type="email"
        errors={errors.email}
        value={values.email}
        onFormikChange={onChange}
        onBlur={onBlur}
        touched={touched.email}
      />

      <FormInputPassword
        name="password"
        errors={errors.password}
        value={values.password}
        onFormikChange={onChange}
        onBlur={onBlur}
        touched={touched.password}
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

SignInFrom.propTypes = {
  errors: PropTypes.shape({
    email: PropTypes.string,
    password: PropTypes.string,
  }),
  values: PropTypes.shape({
    email: PropTypes.string,
    password: PropTypes.string,
  }).isRequired,
  touched: PropTypes.shape({
    email: PropTypes.bool,
    password: PropTypes.bool,
  }),
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  onBlur: PropTypes.func.isRequired,
};

SignInFrom.defaultProps = {
  errors: {},
  touched: {},
};

export default SignInFrom;
