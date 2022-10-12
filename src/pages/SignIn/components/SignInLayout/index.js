import Banner from "../../../../commonComponents/Banner";
import Spinner from "../../../../commonComponents/Spinner";
import SignInForm from "../SignInForm/";
import SnackbarWithAlert from "../../../../commonComponents/Snackbar";

import styles from "./index.module.scss";

const LoginLayout = ({ formik, data, error, isLoading }) => {
  return (
    <div className={styles.wrapper}>
      <Banner />
      {isLoading ? <Spinner /> : <SignInForm formik={formik} />}

      {data?.firstName && (
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
};

export default LoginLayout;
