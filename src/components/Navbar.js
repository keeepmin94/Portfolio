import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import { info } from "../info/Info";
import { useState } from "react";
import Style from "./Navbar.module.scss";
import Toggler from "./home/Toggler";
import { Link, useLocation } from "react-router-dom";
import { Home } from "@mui/icons-material";

const links = [
  {
    name: "Home",
    to: "/",
    active: "home",
  },
  {
    name: "About Me",
    to: "/about",
    active: "about",
  },
  // {
  //   name: "Skill",
  //   to: "/skill",
  //   active: "skill",
  // },
  // {
  //   name: info.initials,
  //   type: "initials",
  //   to: "/",
  //   active: "home",
  // },
  {
    name: "Portfolio",
    to: "/portfolio",
    active: "portfolio",
  },
  {
    name: "Resume",
    to: "/resume",
    active: "resume",
  },
  {
    name: "Career",
    to: "/career",
    active: "career",
  },
  // {
  //   name: "DashBoard",
  //   to: "/dashboard",
  //   active: "dashboard",
  // },
];

function ResponsiveAppBar({ darkMode, handleClick }) {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const location = useLocation();
  const [active, setActive] = useState(
    location.pathname === "/"
      ? "home"
      : location.pathname.slice(1, location.pathname.length)
  );

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="static" color="transparent">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {/* pc 사이즈 로고 */}
          {/* <AdbIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} /> */}
          <Home sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
          <Link to="/" onClick={() => setActive("home")} className={Style.link}>
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="#app-bar-with-responsive-menu"
              sx={{
                mr: 2,
                display: { xs: "none", md: "flex" },
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              JIMIN
            </Typography>
          </Link>
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            {/* 폰사이즈 메뉴바 */}
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {links.map((link, index) => (
                <Link
                  to={link.to}
                  onClick={() => setActive(link.active)}
                  className={Style.link}
                >
                  <MenuItem key={index} onClick={() => setActive(link.active)}>
                    <Typography textAlign="center">{link.name}</Typography>
                  </MenuItem>
                </Link>
              ))}
            </Menu>
          </Box>
          {/* 폰사이즈 로고 */}
          {/* <AdbIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
          <Link to="/" onClick={() => setActive("home")}>
            <Typography
              variant="h5"
              noWrap
              component="a"
              href="#app-bar-with-responsive-menu"
              sx={{
                mr: 2,
                display: { xs: "flex", md: "none" },
                flexGrow: 1,
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              LOGO
            </Typography>
          </Link> */}
          {/* pc 사이즈 메뉴바 */}
          <Box
            sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}
            justifyContent={"center"}
            alignItems={"center"}
            gap={{ xs: "2rem", md: "3rem" }}
            // textTransform={"lowercase"}
            fontSize={"1rem"}
          >
            {links.map((link, index) => (
              <Box
                key={index}
                className={link.active === active && !link.type && Style.active}
                sx={{ borderImageSource: info.gradient }}
              >
                <Link
                  to={link.to}
                  onClick={() => setActive(link.active)}
                  className={Style.link}
                >
                  {!link.type && (
                    <p style={{ padding: "0.5rem 0" }}>{link.name}</p>
                  )}
                  {link.type && <h1>{link.name}</h1>}
                </Link>
              </Box>
            ))}
          </Box>
          <Box>
            <Toggler darkMode={darkMode} handleClick={handleClick} />
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;
