import Navbar from "../../components/Navbar/Navbar";
import TopicsTable from "./TopicsTable";
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
        <Grid items maxWidth={'100%'} width={800}>
          <TopicsTable />
        </Grid>
      </Grid>
    </>
  );
}
