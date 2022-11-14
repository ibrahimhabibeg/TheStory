import { Tooltip, Box } from "@mui/material";
import { Home, Whatshot, Bookmarks, Create } from "@mui/icons-material";
import { Stack } from "@mui/system";

export default function Links() {
  const routes = [
    {
      title: "Home",
      icon: Home,
      href: "/",
    },
    {
      title: "What's Hot",
      icon: Whatshot,
      href: "/hot",
    },
    {
      title: "Bookmarks",
      icon: Bookmarks,
      href: "/bookmarks",
    },
    {
      title: "Create",
      icon: Create,
      href: "/create",
    },
  ];
  return (
    <Stack>
      {routes.map((route) => (
        <Box sx={{width:"100%", textAlign:"right"}}>
          <Tooltip
            title={route.title}
            placement="right"
            sx={{ height: 28, width: 26, my: 2 }}
          >
            <route.icon href={route.href} />
          </Tooltip>
        </Box>
      ))}
    </Stack>
  );
}
