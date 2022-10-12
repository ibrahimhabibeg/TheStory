import { Table, TableBody, TableContainer, Paper } from "@mui/material";
import { useEffect, useState } from "react";
import { getTopics } from "../../../api/topics.api";
import TableHead from "./TopicsTableHead";
import StyledTableCell from "./StyledTableCell";
import StyledTableRow from "./StyledTableRow";

export default function TopicsTable() {
  const [rows, setRows] = useState([]);
  const [loading, setLoading] = useState(true);
  const [order, setOrder] = useState("asc");
  const [orderBy, setOrderBy] = useState("id");

  useEffect(() => {
    const rowsPromise = getTopics({ order, orderBy });
    rowsPromise
      .then((res) => {
        setRows(res.data.topics);
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
      });
  }, [order, orderBy]);
  const handleRequestSort = (property) => {
    setOrder(orderBy === property && order === "asc" ? "desc" : "asc");
    setOrderBy(property);
  };
  if (loading) {
    return <h1>Loading</h1>;
  }
  return (
    <TableContainer component={Paper} sx={{ width: "100%" }}>
      <Table sx={{ width: "auto" }} aria-label="topics table" size="small">
        <TableHead
          onRequestSort={handleRequestSort}
          order={order}
          orderBy={orderBy}
        />
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.id}>
              <StyledTableCell component="th" scope="row" sx={{ width:{md:100,xs:60} }}>
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
      </Table>
    </TableContainer>
  );
}
