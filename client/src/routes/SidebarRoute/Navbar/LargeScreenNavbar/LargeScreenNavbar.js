import  {Stack, Box} from "@mui/material";
import Logo from "./Logo";
import Links from "./Links";
import User from "../User";

export default function LargeScreenNavbar({routes}){
  return(
    <Stack sx={{height:"100vh", justifyContent:"space-between", paddingTop:2, paddingBottom:5}}>
      <Box>
        <Logo/>
      </Box>
      <Box sx={{textAlign:"right", alignItems:"right"}}>
        <Links/>
      </Box>
      <Box>
        <User/>
      </Box>
    </Stack>
  );
}