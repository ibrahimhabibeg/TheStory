import { Box } from "@mui/material";

export default function RouteWithSidebar() {
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
            minHeight: "100vh",
            textAlign: "right",
            paddingRight:2,
            paddingTop:2
          }}
        >
          left
        </Box>
        <Box sx={{ width: "60%", padding:2 }}>main</Box>
        <Box
          sx={{
            width: "25%",
            borderLeft: 1,
            borderColor: "GrayText",
            minHeight: "100vh",
            paddingLeft:2,
            paddingTop:2
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
        <Box sx={{ width: "100%", marginX: "auto" }}>main</Box>
        <Box
          sx={{
            height: "100",
            position: "fixed",
            bottom: 0,
            bgcolor: "blue",
            width: "100%",
          }}
        >
          right
        </Box>
      </Box>
    </>
  );
}
