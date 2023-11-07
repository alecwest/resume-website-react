"use client";

import { ResumeDataContext } from "@/lib/ResumeDataClient";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import LoginIcon from "@mui/icons-material/Login";
import { Button, IconButton, Menu, MenuItem } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { alpha, styled } from "@mui/material/styles";
import React, { useContext, useEffect, useState } from "react";

const ToolbarActions = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  margin: theme.spacing(0, 2),
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    margin: theme.spacing(0, 3),
    width: "auto",
  },
}));

const AppBarIcon = (
  icon: React.ReactNode,
  click?: (event: React.MouseEvent<HTMLButtonElement>) => void
) => (
  <IconButton color="inherit" aria-label="home" onClick={click}>
    {icon}
  </IconButton>
);

const CustomAppBar = () => {
  const [authenticated, setAuthenticated] = useState<Boolean>(false);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const [resumeDataContext, _] = useContext(ResumeDataContext);

  const handleLogin = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAuthenticated(true);
  };

  const handleMenuOpen = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    setAuthenticated(false);
    handleClose();
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed">
        <Toolbar variant="dense">
          {AppBarIcon(<AcUnitIcon></AcUnitIcon>)}
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: "none", sm: "block" }, ml: 2 }}>
            {resumeDataContext?.bio[0].title}
          </Typography>
          <ToolbarActions>
            {authenticated ? (
              <>
                <Button
                  variant="text"
                  endIcon={<ArrowDropDownIcon />}
                  onClick={handleMenuOpen}>
                  alecwest38@gmail.com
                </Button>
                <Menu
                  id="logged-in-menu"
                  anchorEl={anchorEl}
                  open={open}
                  onClose={handleClose}
                  MenuListProps={{ "aria-labelledby": "basic-button" }}>
                  <MenuItem onClick={handleLogout}>Logout</MenuItem>
                </Menu>
              </>
            ) : (
              AppBarIcon(<LoginIcon></LoginIcon>, handleLogin)
            )}
          </ToolbarActions>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default CustomAppBar;
