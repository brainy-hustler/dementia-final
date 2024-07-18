"use client";

import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import AccountCircle from "@mui/icons-material/AccountCircle";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";

import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";

// material UI icons
import {
  VideoSettings,
  SmartToy,
  Dashboard,
  AccessAlarm,
  Home,
  People,
  QuestionMarkSharp,
} from "@mui/icons-material";
import Link from "next/link";
import Swal from "sweetalert2";

export default function MenuAppBar() {
  const [auth, setAuth] = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const updateProfile = () => {
    window.location.href="/home/profile";
  };
  const handleClose = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
     showAlert();
    sleep(2500).then(() => {
      window.location.href="/";
    });
    
  };
  function sleep(ms: number | undefined) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
  function showAlert() {
    Swal.fire({
      position: "center",
      icon: "success",
      title: "Logout Successfully!",
      showConfirmButton: false,
      timer: 10000
    });
  }
  const drawerItems = [
    {
      title: "Home",
      icon: <Home />,
      link: "/home",
    },
    {
      title: "Dashboard",
      icon: <Dashboard />,
      link: "/home/dashboard",
    },
    {
      title: "Dashboard 2",
      icon: <Dashboard />,
      link: "/home/dashboard2",
    },
    {
      title: "Games",
      icon: <SmartToy />,
      link: "/home/games",
    },
    {
      title: "Videos",
      icon: <VideoSettings />,
      link: "/home/videos",
    },
    {
      title: "Questionnaire",
      icon: <QuestionMarkSharp />,
      link: "/home/questionnaire",
    },
    {
      title: "Networking",
      icon: <People />,
      link: "/home/networking",
    }
  ];

  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
      <List>
        {drawerItems.map((item, index) => (
          <Link href={item.link} key={item.title}>
            <ListItem key={item.title} disablePadding>
              <ListItemButton>
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText primary={item.title} />
              </ListItemButton>
            </ListItem>
          </Link>
        ))}
      </List>
      <Divider />
      <List>
        {["Placeholder 1", "Placeholder 2", "Placeholder 3"].map(
          (text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  {index % 2 === 0 ? <AccessAlarm /> : <Home />}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          )
        )}
      </List>
    </Box>
  );

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Drawer open={open} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={toggleDrawer(true)}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Link href={"/home"}>Dementia Defenders</Link>
          </Typography>
          {auth && (
            <div>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <MenuItem onClick={updateProfile}>Profile</MenuItem>
                <MenuItem onClick={handleClose}>Logout</MenuItem>
              </Menu>
            </div>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
}
