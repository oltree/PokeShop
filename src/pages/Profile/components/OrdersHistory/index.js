import { memo, useState } from "react";
import { PropTypes } from "prop-types";

import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import TablePagination from "@mui/material/TablePagination";
import IconButton from "@mui/material/IconButton";
import FirstPageIcon from "@mui/icons-material/FirstPage";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import LastPageIcon from "@mui/icons-material/LastPage";

import { customDate } from "../../utils";

import styles from "./index.module.scss";

const TablePaginationActions = (props) => {
  const theme = useTheme();
  const { count, page, rowsPerPage, onPageChange } = props;

  const handleFirstPageButtonClick = (event) => {
    onPageChange(event, 0);
  };

  const handleBackButtonClick = (event) => {
    onPageChange(event, page - 1);
  };

  const handleNextButtonClick = (event) => {
    onPageChange(event, page + 1);
  };

  const handleLastPageButtonClick = (event) => {
    onPageChange(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
  };

  return (
    <Box sx={{ flexShrink: 0, ml: 2.5 }}>
      <IconButton
        onClick={handleFirstPageButtonClick}
        disabled={page === 0}
        aria-label="first page"
      >
        {theme.direction === "rtl" ? <LastPageIcon /> : <FirstPageIcon />}
      </IconButton>
      <IconButton
        onClick={handleBackButtonClick}
        disabled={page === 0}
        aria-label="previous page"
      >
        {theme.direction === "rtl" ? (
          <KeyboardArrowRight />
        ) : (
          <KeyboardArrowLeft />
        )}
      </IconButton>
      <IconButton
        onClick={handleNextButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="next page"
      >
        {theme.direction === "rtl" ? (
          <KeyboardArrowLeft />
        ) : (
          <KeyboardArrowRight />
        )}
      </IconButton>
      <IconButton
        onClick={handleLastPageButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="last page"
      >
        {theme.direction === "rtl" ? <FirstPageIcon /> : <LastPageIcon />}
      </IconButton>
    </Box>
  );
};

TablePaginationActions.propTypes = {
  count: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
  page: PropTypes.number.isRequired,
  rowsPerPage: PropTypes.number.isRequired,
};

const CustomPaginationActionsTable = ({
  orders,
  onNavigateOrderHistoryDetail,
}) => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const handleChangePage = (_, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const price = (totalPrice) => `$ ${totalPrice}`;

  return (
    <table className={styles.wrapper}>
      <tbody>
        {(rowsPerPage > 0
          ? orders.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
          : orders
        ).map(({ _id: id, createdAt, totalPrice }) => (
          <tr key={id} className={styles.order}>
            <td>{customDate(createdAt)}</td>
            <td>{price(totalPrice)}</td>
            <td>
              <button
                type="submit"
                style={{ padding: "5px 10px" }}
                onClick={() => onNavigateOrderHistoryDetail(id)}
              >
                More...
              </button>
            </td>
          </tr>
        ))}
      </tbody>
      <tfoot>
        <tr>
          <TablePagination
            sx={{ border: 0 }}
            rowsPerPageOptions={[5, 10, 20]}
            colSpan={3}
            count={orders.length}
            rowsPerPage={rowsPerPage}
            page={page}
            SelectProps={{
              inputProps: {
                "aria-label": "rows per page",
              },
              native: true,
            }}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
            ActionsComponent={TablePaginationActions}
          />
        </tr>
      </tfoot>
    </table>
  );
};

CustomPaginationActionsTable.propTypes = {
  orders: PropTypes.arrayOf(PropTypes.shape),
  onNavigateOrderHistoryDetail: PropTypes.func.isRequired,
};

CustomPaginationActionsTable.defaultProps = {
  orders: null,
};

export default memo(CustomPaginationActionsTable);
