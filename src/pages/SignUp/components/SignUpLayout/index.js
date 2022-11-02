import { PropTypes } from "prop-types";

import RegistrationForm from "../RegistrationForm";
import Banner from "../../../../commonComponents/Banner";
import Spinner from "../../../../commonComponents/Spinner";
import SnackbarWithAlert from "../../../../commonComponents/Snackbar";

import styles from "./index.module.scss";

const SignUpLayout = ({
  values,
  errors,
  onChange,
  onBlur,
  touched,
  onSubmit,
  data,
  error,
  isLoading,
}) => (
  <div className={styles.wrapper}>
    <Banner />

    {isLoading ? (
      <Spinner color="black" />
    ) : (
      <RegistrationForm
        values={values}
        errors={errors}
        onChange={onChange}
        onBlur={onBlur}
        touched={touched}
        onSubmit={onSubmit}
      />
    )}

    {data?.data.message && (
      <SnackbarWithAlert
        timeAlert={5000}
        textAlert={data.data.message}
        severity="success"
      />
    )}

    {error?.response.data.message && (
      <SnackbarWithAlert
        timeAlert={5000}
        textAlert={error?.response.data.message}
        severity="error"
      />
    )}
  </div>
);

SignUpLayout.propTypes = {
  values: PropTypes.objectOf(PropTypes.string).isRequired,
  errors: PropTypes.objectOf(PropTypes.string).isRequired,
  onChange: PropTypes.func.isRequired,
  onBlur: PropTypes.func.isRequired,
  touched: PropTypes.objectOf(PropTypes.bool).isRequired,
  onSubmit: PropTypes.func.isRequired,
  data: PropTypes.shape({
    data: PropTypes.shape({
      message: PropTypes.string,
    }),
  }),
  error: PropTypes.shape({
    code: PropTypes.string,
    message: PropTypes.string,
    response: PropTypes.shape({
      data: PropTypes.shape({
        message: PropTypes.string,
      }),
    }),
  }),
  isLoading: PropTypes.bool.isRequired,
};

SignUpLayout.defaultProps = {
  data: null,
  error: null,
};

export default SignUpLayout;
