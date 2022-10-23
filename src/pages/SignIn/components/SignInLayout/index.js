import SignInForm from "../SignInForm/";
import Banner from "../../../../commonComponents/Banner";
import Spinner from "../../../../commonComponents/Spinner";
import SnackbarWithAlert from "../../../../commonComponents/Snackbar";

import styles from "./index.module.scss";

const LoginLayout = ({ formik, isAuth, error, isLoading }) => {
  return (
    <div className={styles.wrapper}>
      <Banner />
      <SignInForm formik={formik} />

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
};

export default LoginLayout;
