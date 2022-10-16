import {
  Table,
  TableBody,
  TableContainer,
  TableRow,
  TableFooter,
  TablePagination,
  Paper,
} from "@mui/material";
import { useEffect, useState } from "react";
import { getTopics } from "../../../api/topics.api";
import TableHead from "./TopicsTableHead";
import StyledTableCell from "./StyledTableCell";
import StyledTableRow from "./StyledTableRow";
import TablePaginationActions from "./TablePaginationActions";

export default function TopicsTable() {
  const [rows, setRows] = useState([]);
  const [loading, setLoading] = useState(true);
  const [order, setOrder] = useState("asc");
  const [orderBy, setOrderBy] = useState("id");
  const [rowsPerPage, setRowsPerPage] = useState(30);
  const [count, setCount] = useState(0);
  const [page, setPage] = useState(0);

  useEffect(() => {
    const rowsPromise = getTopics({
      order,
      orderBy,
      page,
      pageSize: rowsPerPage,
    });
    rowsPromise
      .then((res) => {
        setRows(res.data.topics);
        setCount(res.data.count);
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
      });
  }, [order, orderBy, page, rowsPerPage]);
  const handleRequestSort = (property) => {
    setOrder(orderBy === property && order === "asc" ? "desc" : "asc");
    setOrderBy(property);
  };

  const handleChangePage = (e, newPage) => {
    if (0 <= newPage && newPage <= Math.ceil(count / rowsPerPage) - 1) {
      setPage(newPage);
    }
  };

  const handleChangeRowsPerPage = (e) => {
    setRowsPerPage(parseInt(e.target.value, 10));
    setPage(0);
  };

  if (loading) {
    return <h1>Loading</h1>;
  }
  return (
    <TableContainer component={Paper} sx={{ width: "100%", mb: 7 }}>
      <Table sx={{ width: "auto" }} aria-label="topics table" size="small">
        <TableHead
          onRequestSort={handleRequestSort}
          order={order}
          orderBy={orderBy}
        />
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.id}>
              <StyledTableCell
                component="th"
                scope="row"
                sx={{ width: { md: 100, xs: 60 } }}
              >
                {row.id}.
              </StyledTableCell>
              <StyledTableCell
                sx={{
                  width: { md: 500, xs: 250 },
                  ":hover": { textDecoration: "underline", cursor: "pointer" },
                }}
              >
                {row.title}
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TablePagination
              rowsPerPageOptions={[30, 50, 100]}
              colSpan={3}
              count={count}
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
          </TableRow>
        </TableFooter>
      </Table>
    </TableContainer>
  );
}
