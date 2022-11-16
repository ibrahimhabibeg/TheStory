import { Box } from "@mui/material";
import LargeScreenNavbar from "./Navbar/LargeScreenNavbar/LargeScreenNavbar";
import SmallScreenNavbar from "./Navbar/SmallScreenNavbar/SmallScreenNavbar";

export default function SidebarRoute({children}) {
  return (
    <>
      <Box
        sx={{
          display: { xl: "flex", lg: "flex", md: "none", xs: "none" },
          flexDirection: "row",
          flexWrap: "wrap",
          width: "100vw",
          padding: 0,
        }}
      >
        <Box
          sx={{
            width: "15%",
            borderRight: 1,
            borderColor: "GrayText",
            height: "100vh",
            textAlign: "right",
            alignItems: "right",
            paddingRight: 2,
            paddingTop: 2,
            position:"sticky",
            top:0
          }}
        >
          <LargeScreenNavbar />
        </Box>
        <Box sx={{ width: "60%", padding: 2 }}>
          {children}
        </Box>
        <Box
          sx={{
            width: "25%",
            borderLeft: 1,
            borderColor: "GrayText",
            minHeight: "100vh",
            paddingLeft: 2,
            paddingTop: 2,
          }}
        >
          right
        </Box>
      </Box>
      <Box
        sx={{
          display: { lg: "none", md: "flex" },
          flexDirection: "column",
          width: "100vw",
          padding: 0,
        }}
      >
        <Box sx={{ width: "100%", marginX: "auto" }}>
          {children}
        </Box>
        <Box
          sx={{
            height: "100",
            position: "fixed",
            bottom: 0,
            width: "100%",
            borderTop: 1,
            borderColor: "GrayText",
          }}
        >
          <SmallScreenNavbar />
        </Box>
      </Box>
    </>
  );
}
