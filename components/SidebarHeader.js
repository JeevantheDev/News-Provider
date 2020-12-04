import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";

import Navbar from "./shared/Navbar";
import SideBar from "./shared/Drawer";

const SidebarHeader = ({
  classes,
  theme,
  open,
  handleDrawerOpen,
  handleDrawerClose,
}) => {
  return (
    <>
      <CssBaseline />
      <Navbar
        classes={classes}
        open={open}
        handleDrawerOpen={handleDrawerOpen}
      />
      <SideBar
        theme={theme}
        classes={classes}
        open={open}
        handleDrawerClose={handleDrawerClose}
      />
    </>
  );
};

export default SidebarHeader;
