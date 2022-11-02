import { memo } from "react";
import { PropTypes } from "prop-types";

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

Pagination.propTypes = {
  currentPage: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
  isDisabled: PropTypes.bool.isRequired,
};

export default memo(Pagination);
