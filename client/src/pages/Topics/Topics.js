import Navbar from "../../components/Navbar/Navbar";
import Table from "./Table/TopicsTable";
import { Grid } from "@mui/material";

export default function Topics(props) {
  return (
    <>
      <Navbar {...props} />
      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justifyContent="center"
        mt={2}
      >
        <Grid item maxWidth={'100%'} width={"auto"}>
          <Table />
        </Grid>
      </Grid>
    </>
  );
}
