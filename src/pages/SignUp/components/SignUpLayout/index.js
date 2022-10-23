import RegistrationForm from "../RegistrationForm";
import Banner from "../../../../commonComponents/Banner";
import Spinner from "../../../../commonComponents/Spinner";
import SnackbarWithAlert from "../../../../commonComponents/Snackbar";

import styles from "./index.module.scss";

const SignUpLayout = ({ formik, data, error, isLoading }) => {
  return (
    <div className={styles.wrapper}>
      <Banner />
      {isLoading ? (
        <Spinner color="black" />
      ) : (
        <RegistrationForm formik={formik} />
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
};

export default SignUpLayout;
