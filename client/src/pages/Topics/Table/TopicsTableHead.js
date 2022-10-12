import { Box, TableHead, TableSortLabel } from "@mui/material";
import { visuallyHidden } from "@mui/utils";
import StyledTableCell from "./StyledTableCell";
import StyledTableRow from "./StyledTableRow";

const headCells = [
  {
    id: "id",
    numeric: true,
    disablePadding: true,
    label: "No.",
  },
  {
    id: "title",
    numeric: false,
    disablePadding: false,
    label: "Title",
  }
];

export default function TopicsTableHead(props) {
  const { order, orderBy, onRequestSort } = props;
  const createSortHandler = (property) => (e) => {
    onRequestSort(property);
  };

  return (
    <TableHead>
      <StyledTableRow>
        {headCells.map((headCell) => (
          <StyledTableCell
            key={headCell.id}
            align={headCell.numeric ? "right" : "left"}
            padding={headCell.disablePadding ? "none" : "normal"}
            sortDirection={orderBy === headCell.id ? order : false}
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : "asc"}
              onClick={createSortHandler(headCell.id)}
            >
              {headCell.label}
              {orderBy === headCell.id ? (
                <Box component="span" sx={visuallyHidden}>
                  {order === "desc" ? "sorted descending" : "sorted ascending"}
                </Box>
              ) : null}
            </TableSortLabel>
          </StyledTableCell>
        ))}
      </StyledTableRow>
    </TableHead>
  );
}
