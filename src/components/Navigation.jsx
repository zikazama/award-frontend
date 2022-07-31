import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import { Link } from "react-router-dom";

export default function Navigation() {
  const anchor = "left";

  const [state, setState] = React.useState({
    left: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        <img
          style={{ width: "70px", marginLeft: "50px", marginTop: "30px" }}
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTk6Nj5MmclISJO9ogNDqk2U7YEGoLzShd_7Q&usqp=CAU"
          alt="star"
        />
        <h2 style={{ textAlign: "center" }}>Awards Menu</h2>
        <ListItem key="home" disablePadding>
          <Link to="/home" style={{ textDecoration: "none", color: "black" }}>
            <ListItemButton>
              <ListItemText primary="Home" />
            </ListItemButton>
          </Link>
        </ListItem>
        <ListItem key="cards" disablePadding>
          <ListItemButton>
            <ListItemText primary="Cards" />
          </ListItemButton>
        </ListItem>
        <ListItem key="profile" disablePadding>
          <ListItemButton>
            <ListItemText primary="Profile" />
          </ListItemButton>
        </ListItem>
        <ListItem key="logout" disablePadding>
          <Link to="/" style={{ textDecoration: "none", color: "black" }}>
            <ListItemButton>
              <ListItemText primary="Logout" />
            </ListItemButton>
          </Link>
        </ListItem>
      </List>
    </Box>
  );

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" color="transparent">
        <Toolbar>
          <div style={{ width: "30px" }} onClick={toggleDrawer(anchor, true)}>
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h7"
              ></path>
            </svg>
          </div>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Awards
          </Typography>
          <Link to="/filter">
            <div style={{ width: "30px" }}>
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"
                ></path>
              </svg>
            </div>
          </Link>
        </Toolbar>
      </AppBar>
      <SwipeableDrawer
        anchor={anchor}
        open={state[anchor]}
        onClose={toggleDrawer(anchor, false)}
        onOpen={toggleDrawer(anchor, true)}
      >
        {list(anchor)}
      </SwipeableDrawer>
    </Box>
  );
}
