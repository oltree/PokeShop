import { memo } from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";

import MaterialPagination from "@mui/material/Pagination";

const theme = createTheme({
  palette: {
    yellow: {
      main: "#fed61b",
    },
  },
});

const Pagination = ({ currentPage, onPageChange, isDisabled }) => (
  <ThemeProvider theme={theme}>
    <MaterialPagination
      count={20}
      boundaryCount={2}
      page={currentPage}
      onChange={onPageChange}
      color="yellow"
      disabled={isDisabled}
    />
  </ThemeProvider>
);

export default memo(Pagination);
