import { PropTypes } from "prop-types";

import SignInForm from "../SignInForm";
import Banner from "../../../../commonComponents/Banner";
import Spinner from "../../../../commonComponents/Spinner";
import SnackbarWithAlert from "../../../../commonComponents/Snackbar";

import styles from "./index.module.scss";

const LoginLayout = ({
  errors,
  values,
  touched,
  onSubmit,
  onChange,
  onBlur,
  isAuth,
  error,
  isLoading,
}) => (
  <div className={styles.wrapper}>
    <Banner />
    <SignInForm
      values={values}
      touched={touched}
      errors={errors}
      onSubmit={onSubmit}
      onChange={onChange}
      onBlur={onBlur}
    />

    {isLoading && <Spinner color="black" />}

    {isAuth && (
      <SnackbarWithAlert
        timeAlert={2000}
        textAlert="You successfully log in. Now we redirect you to store page."
        severity="success"
      />
    )}

    {error && (
      <SnackbarWithAlert
        timeAlert={3000}
        textAlert={error.message}
        severity="error"
      />
    )}
  </div>
);

LoginLayout.propTypes = {
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
  isAuth: PropTypes.bool.isRequired,
  error: PropTypes.func,
  isLoading: PropTypes.bool.isRequired,
};

LoginLayout.defaultProps = {
  error: null,
  errors: {},
  touched: {},
};

export default LoginLayout;
