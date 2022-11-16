import { Tooltip, Box } from "@mui/material";
import {
  Home,
  HomeOutlined,
  Whatshot,
  WhatshotOutlined,
  Bookmarks,
  BookmarksOutlined,
  Create,
  CreateOutlined,
} from "@mui/icons-material";
import { Stack } from "@mui/system";
import { useNavigate, useLocation } from "react-router-dom";

export default function Links() {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const routes = [
    {
      title: "Home",
      iconFilled: Home,
      iconOutlined: HomeOutlined,
      href: "/side",
    },
    {
      title: "What's Hot",
      iconFilled: Whatshot,
      iconOutlined: WhatshotOutlined,
      href: "/hot",
    },
    {
      title: "Bookmarks",
      iconFilled: Bookmarks,
      iconOutlined: BookmarksOutlined,
      href: "/bookmarks",
    },
    {
      title: "Create",
      iconFilled: Create,
      iconOutlined: CreateOutlined,
      href: "/create",
    },
  ];
  const navigateToRoute = (route) => {
    navigate(route);
  };
  return (
    <Stack>
      {routes.map((route) => (
        <Box
          sx={{ width: "100%", textAlign: "right" }}
          onClick={() => navigateToRoute(route.href)}
        >
          <Tooltip
            title={route.title}
            placement="right"
            sx={{ height: 28, width: 26, my: 2 }}
          >
            {pathname === route.href ? (
              <route.iconFilled />
            ) : (
              <route.iconOutlined />
            )}
          </Tooltip>
        </Box>
      ))}
    </Stack>
  );
}
