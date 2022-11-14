import { memo } from "react";
import { PropTypes } from "prop-types";

import CircularProgress from "@mui/material/CircularProgress";
import { createTheme, ThemeProvider } from "@mui/material/styles";

import styles from "./index.module.scss";

const theme = createTheme({
  palette: {
    yellow: {
      main: "#fed61b",
    },
    black: {
      main: "#000",
    },
  },
});

const Spinner = ({ color }) => (
  <ThemeProvider theme={theme}>
    <CircularProgress color={color} className={styles.spiner} />
  </ThemeProvider>
);

Spinner.propTypes = {
  color: PropTypes.string.isRequired,
};

export default memo(Spinner);
