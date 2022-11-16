import { Box } from "@mui/material";
import {
  Home,
  HomeOutlined,
  Whatshot,
  WhatshotOutlined,
  Search,
  SearchOutlined,
} from "@mui/icons-material";
import { useNavigate, useLocation } from "react-router-dom";
import User from "../User";

export default function SmallScreenNavbar() {
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
      title: "Search",
      iconFilled: Search,
      iconOutlined: SearchOutlined,
      href: "/search",
    },
  ];
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const navigateToRoute = (route) => {
    navigate(route);
  };
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "rows",
        height: "100%",
        justifyContent: "space-around",
      }}
    >
      {routes.map((route) =>
        pathname === route.href ? (
          <route.iconFilled
            sx={{ height: 28, width: 26, my: 2 }}
            onClick={() => navigateToRoute(route.href)}
          />
        ) : (
          <route.iconOutlined
            sx={{ height: 28, width: 26, my: 2 }}
            onClick={() => navigateToRoute(route.href)}
          />
        )
      )}
      <Box sx={{width:"fit-content",my:"auto"}}>
        <User />
      </Box>
    </Box>
  );
}
