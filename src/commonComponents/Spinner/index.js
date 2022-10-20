import { memo } from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";

import CircularProgress from "@mui/material/CircularProgress";

import styles from "./index.module.scss";

const theme = createTheme({
  palette: {
    yellow: {
      main: "#fed61b",
    },
  },
});

const Spinner = () => (
  <ThemeProvider theme={theme}>
    <CircularProgress color="yellow" className={styles.spiner} />
  </ThemeProvider>
);

export default memo(Spinner);
