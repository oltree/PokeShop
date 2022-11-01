import { PropTypes } from "prop-types";

import Header from "../Header";
import Footer from "../Footer";

import styles from "./index.module.scss";

const MainLayout = ({ children }) => (
  <div className={styles.wrapper}>
    <Header />
    <div className={styles.main}>{children}</div>
    <Footer />
  </div>
);

MainLayout.propTypes = {
  children: PropTypes.element.isRequired,
};

export default MainLayout;
