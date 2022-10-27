import { Box, Typography } from "@mui/material";

const weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const getDayOfWeek = () => {
  const today = new Date();
  return weekdays[today.getDay()];
};

const getFormattedDate = () => {
  const today = new Date();
  const yyyy = today.getFullYear();
  let mm = today.getMonth() + 1; // Months start at 0!
  let dd = today.getDate();
  if (mm < 10) mm = "0" + mm;
  return dd + "/" + mm + "/" + yyyy;
};

export default function DateComponent() {
  const formattedDate = getFormattedDate();
  const dayOfWeek = getDayOfWeek();
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        marginX: "auto",
        width: "95%",
        maxWidth: 800,
        mt: 2,
        borderBottom: 1,
        borderColor: "GrayText",
      }}
    >
      <Typography fontFamily={"cursive"}>{dayOfWeek}</Typography>
      <Typography fontFamily={"cursive"}>{formattedDate}</Typography>
    </Box>
  );
}
